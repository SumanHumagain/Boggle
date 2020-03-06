import { createStore } from "redux"
import gameReducer from './reducers/gameReducer'

export default function configureStore(initialState){
    return createStore(gameReducer, initialState); //creates redux store
}