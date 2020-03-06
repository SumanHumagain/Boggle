import React from 'react'
import ReactDOM from 'react-dom'
import App from "../components/app";
import configureStore from '../configureStore';
import { Provider } from "react-redux";

export const initialState = {
  //...config,
  score: 34,
  trials: 2,
  inGame: false,
  wordScoreList: {},
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
