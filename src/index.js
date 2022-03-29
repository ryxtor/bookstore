import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import store from './redux/configureStore';
import Header from './components/Header';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Header />
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
