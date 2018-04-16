import React from 'react';
import ReactDOM from 'react-dom';

import './reset.css';
import './index.css';

import Game from './components/game';

import store from './store';
import { tryGuess, resetGame } from './actions/index';

store.dispatch(tryGuess(13));
console.log(store.getState());

store.dispatch(tryGuess(80));
console.log(store.getState());

store.dispatch(tryGuess(29));
console.log(store.getState());

store.dispatch(resetGame());
console.log(store.getState());

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
