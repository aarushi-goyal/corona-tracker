import React from 'react';
import { BrowserRouter, Route, } from 'react-router-dom';

import ListPage from './pages/ListPage';

export default () => (
  <BrowserRouter>
    <Route path="/" component={ListPage} />
  </BrowserRouter>
);