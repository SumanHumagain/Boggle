import React from "react"
import { connect } from "react-redux";
import Board from "../Board/Board";
import '../game/game.css';
import InputWord from "../inputWord/inputWord";
import { gameAction } from "../../actions/game.action";
import WordList from "../WordList/WorldList";

const URL_CHECK_WORD = "https://boggle-backend.herokuapp.com/rounds/checkword";

class Game extends React.Component {

  constructor(props) {
    super(props);
  debugger;

  const letters  = this.props.data;

  console.log(letters);

    this.state = {
      board: letters,
      currentWord: "",
    };
  }

  handleWord = (word) => {debugger;
    if (!this.checkWordLength(word)) return false
    if (!this.checkDuplicateWord(word)) return false

    const { dispatch } = this.props;

    dispatch(
      gameAction.evaluateWord(
        {
          word: word
        } 
      )
    );
    
    //if (!this.checkWordExists(word)) return false
  }

  checkWordLength = (word) => {
    return (word.length >= 3) ? true : false
  }

  checkDuplicateWord = (word) => {debugger;
    if(!this.props.wordScoreList){
    return (this.props.wordScoreList.includes(word) ? false : true)
  }
  else return true;
  }

  checkWordExists = (word) => {

    fetch(URL_CHECK_WORD, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "word": word})
    })
    .then(res => res.json())
    .then(json => {
      console.log(json);
      json ? 
      dispatch(success(response))
      : false

    })
      
  }

  render () {
    return (
      <div className="game-container-grid ">
        {/* {this.props.inGame ?  : null} */}
        <Board
          board={this.state.board}
        />
        <WordList wordsAll={this.props.wordScoreList} />
        <InputWord board={this.state.board} handleWord={this.handleWord}
        />
       
    </div>
    );
  }
}


function mapStateToProps(state) {
  const { data, wordScoreList, inGame } = state;
  return { data, wordScoreList,inGame };
}

Game = connect(mapStateToProps)(Game);

export default Game;

