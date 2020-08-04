import React from 'react';
import { Route, Redirect, Router } from 'react-router-dom';
import { BASE_ROUTE, CASE_FEED_ROUTE } from '../models/routes';
import CaseSeek from '../modules/CaseSeek/pages/ListPage';

import history from './history';
import AppHeader from '../components/AppHeader';

export default (
  <Router history={history}>
    <div>
      <AppHeader push={history.push} />
      <Route path={CASE_FEED_ROUTE} exact component={CaseSeek} />
      <Redirect from={BASE_ROUTE} to={CASE_FEED_ROUTE} />
    </div>
  </Router>
);
