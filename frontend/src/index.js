import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Routes from './routes/routes';
import {Provider} from "react-redux";
import {store} from "./components/store";



ReactDOM.render(
  <Provider store = {store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
