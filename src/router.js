import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/app';
import Main from './components/main';

import Product from './components/product';


export default () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Main} />
        <IndexRoute component={Product} />
      </Route>
    </Router>
  );
};
