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
import Bookings from '../../containers/Bookings';

const middleware = [thunk];
const store = createStore(
  combineReducers({
    carState: carsReducer,
    userState: userReducer,
    bookingState: bookingsReducer,
  }),
  composeWithDevTools(applyMiddleware(...middleware)),
);

describe('Bookings', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Bookings store={store} />
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
