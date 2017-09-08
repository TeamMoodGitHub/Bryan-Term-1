import React from 'react';

import ReactDOM from 'react-dom';
import { createHashHistory } from 'history/createHashHistory';
import Routes from './routes';
import './index.css';

import App from './App';

import 'bootstrap/dist/css/bootstrap.css';

import 'bootstrap/dist/css/bootstrap-theme.css';

import { HashRouter, Route } from 'react-router';

ReactDOM.render(
  <Routes history={HashRouter}/>, document.getElementById('root')
);
