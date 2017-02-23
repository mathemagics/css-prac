import React from 'react';
import Header from './header';
import Footer from './footer';

export default (props) => {
  return (
    <div className="app">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};
