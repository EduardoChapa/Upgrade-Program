import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './components/router/AppRouter';

import './styles/style.scss';
import 'animate.css';

ReactDOM.render(
  <AppRouter />,
  document.getElementById('root')
);