import React from 'react';
import Header from './Header';

export default (props) => {
  return (
    <div className="app">
      <Header />
      {props.children}
    </div>
  );
};
