import React from 'react';
import ReactDOM from 'react-dom';

import './reset.css';
import './index.css';

import Game from './components/game';

import store from './store';
import { addGuess, addFeedback } from './actions/index';

//displatch
store.dispatch(addGuess(10));
store.dispatch(addGuess(12));
store.dispatch(addGuess(112));

store.dispatch(addFeedback('Hot'));
console.log(store.getState());
store.dispatch(addGuess(100));

console.log(store.getState());

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
