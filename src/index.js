import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes'
import { browserHistory } from 'react-router';
import './styles/index.css';

ReactDOM.render(
  <Routes history={browserHistory} />,
  document.getElementById('root')
);
