import React from 'react'
import ReactDOM from 'react-dom'
import App from "../components/app";
import configureStore from '../configureStore';
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';

export const initialState = {
  defaultPath: "/",
  baseName: "/",
  timeLimit: "00:03:00",
  data:'',
  score: 0,
  trials: 0,
  inGame: false,
  wordScoreList: [],
  trials: 0,
  wrongCount: 0,
};



const store = configureStore(initialState);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
       <App />
    </Provider>,
    document.body.appendChild(document.createElement('div')),
  )
})
