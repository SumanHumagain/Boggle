import { gameService } from "../services/game.service";
import { object } from "prop-types";

export const NEW_GAME_SUCCESS = "NEW_GAME_SUCCESS";
export const EVALUATION_SUCCESS = "EVALUATION_SUCCESS";
export const EVALUATION_INIT = "EVALUATION_INIT";
export const EVALUATION_INCORRECT = "EVALUATION_INCORRECT";
export const CLEAR_GAME = "CLEAR_GAME";
export const IsIN_GAME = "IsIN_GAME";

import {  toast } from 'react-toastify';

export const gameAction = {
    startNewGame,
    evaluateWord,
    clearGame,
    isinGame,
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

function isinGame() {
  return dispatch => {
    dispatch(request());
    //gameService.backToHome();
  }

  function request() {
    return { type: IsIN_GAME };
  }

}

function clearGame() {
  return dispatch => {
    dispatch(request());
    //gameService.backToHome();
  }

  function request() {
    return { type: CLEAR_GAME };
  }

}

function evaluateWord(word) {
    return dispatch => {
  
      dispatch(request({ word: word }));
  
      // MAKE A CALL TO THE API
      gameService
        .evaluateWord(word)
        .then(response => {
  debugger;
          if (response && response.data) {
                debugger;
  
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
                toast.success("Correct!");
           
          } else {
            dispatch(incorrect(response));
            toast.error("Incorrect word");
          }
  
        });
  
    };
}

function success(response) {
    return { type: EVALUATION_SUCCESS, response };
  }

  function incorrect(error) {
    return { type: EVALUATION_INCORRECT, error };
  }

function request(response) {
    return { type: EVALUATION_INIT, response };
  }
  
      function startSuccess(res) {
        return { type: NEW_GAME_SUCCESS, res };
      }