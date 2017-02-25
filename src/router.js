import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/app';
import Main from './components/main';
import Shop from './components/shop';

export default () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Shop} />
        <Route path="/shop" component={Shop} />
      </Route>
    </Router>
  );
};
