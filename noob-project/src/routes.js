import React from 'react';

import { HashRouter, Routes, Router, Route, Switch } from 'react-router';

import App from './App';
import Champions from './Pages/Champions/Champions';
import ContactUs from './Pages/ContactUs/ContactUs';
import Guides from './Pages/Guides/Guides';
import NotFound from './Pages/NotFound/NotFound';

const Routes = (props) => (
  <Router {...props}>
      <Route path="/" Component={App}>
        <switch>
          <Route path="/ContactUs" exact component={ContactUs} />
          <Route path="/Champions" exact component={Champions} />
          <Route path="/Guides" exact component={Guides} />
          <Route path="*" exact component={NotFound} />
        </switch>
      </Route>
  </Router>
);

export default Routes;
