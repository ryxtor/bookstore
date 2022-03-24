import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter } from 'react-router-dom';
import Header from './components/Header';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Header />
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
