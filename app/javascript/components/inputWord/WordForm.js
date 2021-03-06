import React from 'react'

export default class WordForm extends React.Component {
    state = {
        input: '',
        errorMessage: ""
      }

      handleSubmit = (event) => {
        debugger;
        event.preventDefault();
        this.props.handleWord(this.state.input);
        
        this.setState({input: '', errorMessage:''});
      }

      handleChange = (event) => {
          debugger;
        if (this.checkInput(event.target.value)) {
            this.setState({
              input: event.target.value,
              errorMessage: ""
            })
          } else {
            this.setState({input: '',
              errorMessage: "That is not a valid letter!"
            })
          }
      }

      checkInput = (input) => {debugger;
        if (input.length === 1) return this.props.letters.includes(input)
        const board = this.buildBoardObject()
        console.log(input, board)
        for (let i = 0; i <= Object.keys(board).length; i++) {
          if (board[i] === input[0]) {
            if (this.checkIfFollowingLettersAreValid(input, i, board)) {
              return true
            }
          }
        }
        return false
      }
    
      checkIfFollowingLettersAreValid = (string, idx, board) => {
        if (string.length === 1) return true
        const remainingBoard = Object.assign({}, board)
        delete remainingBoard[idx]
        const nextLetter = string[1]
        const moves = this.possibleMoves(idx)
        for (let i = 0; i < moves.length; i++) {
          if (remainingBoard[moves[i]] === nextLetter) {
            let newString = string.slice(1)
            let newIdx = moves[i]
            const result = this.checkIfFollowingLettersAreValid(newString, newIdx, remainingBoard)
            if (result) return result
          }
        }
        return false
      }
    
      rightEdge = (idx) => (idx % 4 === 0)
      leftEdge = (idx) => (idx % 4 === 1)
      top = (idx) => (idx <= 4)
      bottom = (idx) => (idx >= 13)
    
      possibleMoves = (idx) => {
        const moves = []
        if (!this.rightEdge(idx)) moves.push(idx + 1)
        if (!this.rightEdge(idx) && !this.top(idx)) moves.push(idx - 3)
        if (!this.top(idx)) moves.push(idx - 4)
        if (!this.leftEdge(idx) && !this.top(idx)) moves.push(idx - 5)
        if (!this.leftEdge(idx)) moves.push(idx - 1)
        if (!this.leftEdge(idx) && !this.bottom(idx)) moves.push(idx + 3)
        if (!this.bottom(idx)) moves.push(idx + 4)
        if (!this.rightEdge(idx) && !this.bottom(idx)) moves.push(idx + 5)
        return moves
      }
    
      buildBoardObject = () => {
        const letters = this.props.letters
        if (letters[0] !== " ") {
          const arr = letters.split("")
          return arr.reduce((agg, l, i) => {
            agg[i + 1] = l
            return agg
          }, {})
        }
      }

    render = () => {
        return(
        <div className="mt-4 inputFormDgn input-form container">
          <form onSubmit={this.handleSubmit} >
            <div className="inputFieldDgn row">
            <div className="col-4">
              <input type='text' onChange={this.handleChange} value={this.state.input} />
              {this.state.errorMessage ? <p className="alert alert-danger error-message">{this.state.errorMessage}</p> : "" }
            </div>
            <div className="col-1">
              <button type='submit' className="ml-2 btn btn-info" >Enter</button>
            </div>
          </div>

</form>
            
        </div>
        )
    }




}
