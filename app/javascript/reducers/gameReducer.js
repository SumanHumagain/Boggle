
export const NEW_GAME_SUCCESS = "NEW_GAME_SUCCESS";
export const EVALUATION_INIT = "EVALUATION_INIT";
export const EVALUATION_SUCCESS = "EVALUATION_SUCCESS";


const gameReducer = (state = [], action) => {
    debugger;
    switch (action.type) {
        case NEW_GAME_SUCCESS:
          return { ...state, inGame: true, data:action.res.setup };

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

        default:
            //localStorage.setItem('statess',JSON.stringify(state));
            return state;
        }
}

export default gameReducer;