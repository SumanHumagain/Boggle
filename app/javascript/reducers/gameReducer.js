
export const NEW_GAME_SUCCESS = "NEW_GAME_SUCCESS";
export const EVALUATION_INIT = "EVALUATION_INIT";
export const EVALUATION_SUCCESS = "EVALUATION_SUCCESS";
export const EVALUATION_INCORRECT = "EVALUATION_INCORRECT";
export const CLEAR_GAME = "CLEAR_GAME";
export const IsIN_GAME = "IsIN_GAME";


const gameReducer = (state = [], action) => {
    debugger;
    switch (action.type) {
        case NEW_GAME_SUCCESS:
          return { ...state, inGame: true, data:action.res.setup, trials: 0, wrongCount: 0, wordScoreList: [] };

          case EVALUATION_INIT:
      let trialCount = state.trials + 1;
      return { ...state, trials: trialCount };

      case EVALUATION_SUCCESS:

        let { word } = action.response;
        
        return {
          ...state,
          wordScoreList: {
            ...state.wordScoreList,
            [word.word]:word.score
          }
        };

        case EVALUATION_INCORRECT:
      let wrongCount = state.wrongCount + 1;
      return { ...state, wrongCount: wrongCount };

      case IsIN_GAME:
        return { ...state, inGame: false };


      case CLEAR_GAME:
        return { ...state, inGame: false, trials: 0, wrongCount: 0, wordScoreList: [] };

        default:
            //localStorage.setItem('statess',JSON.stringify(state));
            return state;
        }
}

export default gameReducer;