import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { HashRouter as Router  } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import browserHistory from './browser-history';
import { fetchRates } from './store/api-actions';
import { reducer } from './store/reducer';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);

store.dispatch(fetchRates());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <App/>
    </Router>
  </Provider>,
);

reportWebVitals();
