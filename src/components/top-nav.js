import React from 'react';
import {connect} from 'react-redux';

import './top-nav.css';
import { resetGame } from '../actions';

//smart -- needs to be connected bc from here we Restart --> dispatch restartGame fxn
export function TopNav(props) {
  return (
    <nav>
      <ul className="clearfix">
        <li>
          <a 
            href="#what" 
            className="what"
            aria-label="How to play"
          >
            What?
          </a>
        </li>
        <li>
          <a
            href="#feedback"
            className="new"
            aria-label="Start a new game"
            onClick={() => props.dispatch(resetGame(Math.round(Math.random() * 100) + 1))}
          >
            + New Game
          </a>
        </li>
        <li>
          <a
            href="#get-status"
            /* the `visuallyhidden` class hides an element 
            while leaving it available to screen reader users  */
            className="visuallyhidden focusable status-link"
            onClick={() => props.onGenerateAuralUpdate()}
          >
            Hear state of game
          </a>
        </li>
      </ul>
    </nav>
  );
}
//not accessing state so no --> mapTo..
export default connect()(TopNav)