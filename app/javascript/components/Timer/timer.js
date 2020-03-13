import React from 'react'
import ReactStopwatch from "react-stopwatch";
import { connect } from "react-redux";
import '../Timer/timer.css';

class Timer extends React.Component {
    constructor(props) {
      super(props);

    }

   

    render() {
        const { timeLimit } = this.props;
    return (
        <div>
          { timeLimit &&  <React.Fragment>
          <ReactStopwatch
            seconds={0}
            minutes={0}
            hours={0}
            limit={timeLimit}
            onChange={({ hours, minutes, seconds }) => {

            }}
            onCallback={() => this.props.routeChange()}
            render={({ formatted, hours, minutes, seconds }) => {
              var extraClass = "timer-green";
              if (minutes > 2) extraClass = "timer-red";
              else if (minutes > 1 && minutes < 2) extraClass = "timer-yellow";
              return (
                <span className={"stopwatch " + extraClass}>
                  Elapsed: {formatted}
                </span>
              );
            }}
          />
          
        </React.Fragment>
    }
    </div>
  );
}

}

function mapStateToProps(state) {debugger;
    const { timeLimit } = state;
     
    console.log('Time Limit: ', timeLimit);
    return { timeLimit };
  
  }
  
Timer = connect(mapStateToProps)(Timer);
  
export default Timer
