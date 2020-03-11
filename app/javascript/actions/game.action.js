import { gameService } from "../services/game.service";
import { object } from "prop-types";

export const NEW_GAME_SUCCESS = "NEW_GAME_SUCCESS";
export const EVALUATION_SUCCESS = "EVALUATION_SUCCESS";
export const EVALUATION_INIT = "EVALUATION_INIT";

export const gameAction = {
    startNewGame,
    evaluateWord
    // clearGame,
    // backToHome
  };

function startNewGame(history) {debugger;
    return dispatch => {
  
      gameService.startGame()
      .then(response => {
    debugger;
        if (response) {
            dispatch(startSuccess(response));
            history.push('/newgame');
        }

      });
    }
}

function evaluateWord(word) {
    return dispatch => {
  
      dispatch(request({ word: word }));
  
      // MAKE A CALL TO THE API
      gameService
        .evaluateWord(word)
        .then(response => {
  
          if (response) {
              // if (response.success) {
                debugger;
  
            //   if (response.data && response.data.is_correct) {

                //calculate point
                let score = 0;
                score = word.word.length -2;

                if(score <1 )
                score =1;

                if(score >6 )
                score =6;

                word.score = score;

                const res= {word};


                dispatch(success(res));  
  
           
          } else {
            dispatch(incorrect(response));
            //let msg = 'Something went wrong.'
          }
  
        });
  
    };
}

function success(response) {
    return { type: EVALUATION_SUCCESS, response };
  }

function request(response) {
    return { type: EVALUATION_INIT, response };
  }
  
      function startSuccess(res) {
        return { type: NEW_GAME_SUCCESS, res };
      }