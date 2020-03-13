import React, { Component } from "react";
import { connect } from "react-redux";
import Board from "../Board/Board";
import '../game/game.css';
import InputWord from "../inputWord/inputWord";
import { gameAction } from "../../actions/game.action";
import WordList from "../WordList/WorldList";
import Timer from '../Timer/timer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Game extends Component {

  constructor(props) {
    super(props);
    debugger;
    gameAction.evaluateWord("test"); //trick

    const letters  = this.props.data;
    console.log(letters);
    this.routeChange=this.routeChange.bind(this);
    this.restartGame = this.restartGame.bind(this);
    this.gotoHome = this.gotoHome.bind(this);

    this.state = {
      isGameStarted: true,
      board: letters,
      currentWord: ""
    };
  }

  // componentDidMount() {debugger
  //   window.addEventListener("popstate", this.gotoHome);
  // }

  goBack(e){
    debugger;

  }

  routeChange() {debugger;
    this.setState({
      isGameStarted: false,
    });
   gameAction.isinGame();
   toast.info("Game Over! Check Your Score.");
    
  }

  handleWord = (word) => {
    debugger;
    event.preventDefault();
    
    if (!this.checkWordLength(word)) { 
      this.displayMsgInvalid("Invalid!");
      return false
    }
    if (!this.checkDuplicateWord(word)) 
    { 
      this.displayMsg("Already Exists!");
      return false
    }
    const { dispatch } = this.props;
    dispatch(gameAction.evaluateWord({
          word: word
        } 
      )
      
    );

  }



  checkWordLength = (word) => {
    return (word.length >= 3) ? true : false
  }

  checkDuplicateWord = (word) => {debugger;
    //if(this.props.wordScoreList){
     return(Object.keys(this.props.wordScoreList).includes(word) ? false : true)
  // }
  // else return true;
  }

  displayMsg(message){
    debugger;
    toast.info(message);
  }

  displayMsgInvalid(message){
    debugger;
    toast.error(message);
  }

  restartGame() {
  debugger;
  event.preventDefault();
  const { dispatch } = this.props;
  const history = this.props.history;
    dispatch(gameAction.startNewGame(history));
    this.setState({
      isGameStarted: true,
    });

  }

  gotoHome(){
    debugger;
    this.props.history.push('/');

  }

  // notify = () =>  toast.error("test !");

  render () {
    let { timeLimit,trials, wrongCount, inGame } = this.props;
    return (
      <div className="card">
     { this.props.inGame ? 
      <div className="mt-4 row col card-body game-container-grid ">
        { this.state.isGameStarted ? 
        <Timer timeLimit={timeLimit}  routeChange = {this.routeChange} />  :
        <div>
         <button onClick={this.gotoHome} className="ml-5 mt-4 btn btn-success restartBtn"> Goto Home </button>
       <span></span>  <button onClick={this.restartGame} className="ml-5 mt-4 btn btn-primary restartBtn"> Restart </button>
         </div>
        }
        <Board
          board={this.state.board}
        />
        <WordList wordsAll={this.props.wordScoreList} trials={trials} wrongCount={wrongCount} />
        </div>
        :<div className="alert">Not Found!</div>}
        { this.props.inGame && this.state.isGameStarted ?
        <InputWord board={this.state.board} handleWord={this.handleWord}  />
         : null }

        <ToastContainer autoClose={1200}  />
       
    </div>
    );
  }
}


function mapStateToProps(state) {
  const { data, wordScoreList, inGame, timeLimit, trials, wrongCount  } = state;
  return { data, wordScoreList,inGame,timeLimit, trials, wrongCount };
}

Game = connect(mapStateToProps)(Game);

export default Game;

