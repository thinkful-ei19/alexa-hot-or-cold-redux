import React from 'react';
import ReactDOM from 'react-dom';

import './reset.css';
import './index.css';

import Game from './components/game';

import store from './store';
import { addGuess } from './actions/index';

//displatch
store.dispatch(addGuess(10));
store.dispatch(addGuess(12));
console.log(store.getState());
store.dispatch(addGuess(112));
console.log(store.getState());

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
