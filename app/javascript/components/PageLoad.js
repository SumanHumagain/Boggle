import React from "react"
import { gameAction } from "../../javascript/actions/game.action";
import { connect } from "react-redux";
import LogoImg from '../../assets/images/logo_boggle.png';

class PageLoad extends React.Component {


  constructor(props) {
    super(props);

    // this.state = {
    //   boardSize: 4
    // };
    
    this.props.history.push('/');
    this.startGame = this.startGame.bind(this);
  }

  startGame(event) {  debugger;
    event.preventDefault();
    
    //this.setState({ submitted: true });

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
             <div className="mt-2">
               <img src={LogoImg} alt="logo"/>
              </div>
              <div className="mt-2">
              <h2>Are you ready?</h2>
              </div>
              <div className="mt-5">
                <button type="button" onClick={this.startGame} className="btn btn-success">Lets Start The Game</button>
            </div>
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
