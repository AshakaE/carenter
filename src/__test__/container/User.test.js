import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import '../../index.css';
import carsReducer from '../../redux/reducers/carsReducer';
import bookingsReducer from '../../redux/reducers/bookingsReducer';
import userReducer from '../../redux/reducers/userReducer';
import User from '../../containers/User';

const middleware = [thunk];
const store = createStore(
  combineReducers({
    carState: carsReducer,
    userState: userReducer,
    bookingState: bookingsReducer,
  }),
  composeWithDevTools(applyMiddleware(...middleware)),
);

describe('User', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <User
            store={store}
            id="1"
            user="user"
            key="1"
          />
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
