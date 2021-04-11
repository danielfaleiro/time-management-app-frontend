import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import './index.css';
import App from './App';
import store from './store';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
      <ToastContainer
        position="bottom-right"
      />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);
