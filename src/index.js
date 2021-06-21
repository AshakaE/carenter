import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import './index.css';
import App from './components/App';
import carsReducer from './redux/reducers/carsReducer';
import bookingsReducer from './redux/reducers/bookingsReducer';
import bookingsFormReducer from './redux/reducers/bookingsFormReducer';
import userReducer from './redux/reducers/userReducer';

const middleware = [thunk];
const store = createStore(
  combineReducers({
    carState: carsReducer,
    userState: userReducer,
    bookingState: bookingsReducer,
    bookingFormState: bookingsFormReducer,
  }),
  composeWithDevTools(applyMiddleware(...middleware)),
);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
