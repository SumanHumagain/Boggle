import React from "react"
import { gameAction } from "../../javascript/actions/game.action";
import { connect } from "react-redux";
class PageLoad extends React.Component {


  constructor(props) {
    super(props);

    // this.state = {
    //   boardSize: 4
    // };
 
    this.startGame = this.startGame.bind(this);
  }

  startGame(event) {  debugger;
    event.preventDefault();

    this.setState({ submitted: true });

    // const { userName, stageID, boardSize } = this.state;
    const { dispatch } = this.props;
    const history = this.props.history;

    // if (userName && stageID) {
    //   var newGameObj = {
    //     boardSize
    //   };
      dispatch(gameAction.startNewGame(history));
    //}
  }



  render () {
    return (
      <React.Fragment>
      <div className="page-load">
              <p>
                Welcome to boggle game!
              </p>
              
              <h2>Are you ready?</h2>
              {/* <input type="Button"  value="Lets start the game" /> */}
              <button type="button" onClick={this.startGame} className="btn  btn-success">Start New Game</button>
      </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

PageLoad = connect(mapStateToProps)(PageLoad);
//export default connect(null, mapDispatchToProps)(PageLoad)
export default PageLoad
