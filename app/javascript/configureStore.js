import { createStore,applyMiddleware } from "redux"
import gameReducer from './reducers/gameReducer'
import thunk from "redux-thunk";

export default function configureStore(initialState){
    return createStore(gameReducer, initialState, applyMiddleware(thunk)); //creates redux store
}