import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App.tsx';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux'
import {store} from "./redux/store.ts";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
