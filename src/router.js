import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/app';
import Main from './components/main';
import Shop from './components/shop';
import Adventures from './components/adventures';

export default () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Main} />
        <Route path="/shop" component={Shop} />
        <Route path="/adventures" component={Adventures} />
      </Route>
    </Router>
  );
};
