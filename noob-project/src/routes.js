import React from 'react';

import { Route, Switch } from 'react-router-dom';
import App from './App';
import Champions from './Pages/Champions/Champions';
import ContactUs from './Pages/ContactUs/ContactUs';
import Guides from './Pages/Guides/Guides';
import NotFound from './Pages/NotFound/NotFound';

import Navigation from './components/navigation';

import { BrowserRouter as Router } from 'react-router-dom';


const Routes = (props) => (
  <Router>
    <div>
      <Navigation />
      <Switch location={props.location}>
        <Route exact path="/" component={App} />
        <Route path="/ContactUs" component={ ContactUs } />
        <Route path="/Champions" component={ Champions } />
        <Route path="/Guides" component={ Guides } />
        <Route component={ NotFound } />
      </Switch>
    </div>

  </Router>

);

export default Routes;
