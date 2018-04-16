import React from 'react';

import TopNav from './top-nav';

import './header.css';

//dumb and stateless
//skeleton -- layout that contains TopNav
export default function Header(props) {
  return (
    <header>
      <TopNav />
      <h1>HOT or COLD</h1>
    </header>
  );
}
