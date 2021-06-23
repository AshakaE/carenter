import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Bookings from '../containers/Bookings';
import Cars from '../containers/Cars';
import User from '../containers/User';
import Login from './Login';
import Root from './Root';

const App = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Root />
        </Route>
        <Route path="/login-or-signup">
          <Login />
        </Route>
        <Route path="/bookings">
          <Bookings />
        </Route>
        <Route path="/cars">
          <Cars />
        </Route>
        <Route path="/user">
          <User />
        </Route>
      </Switch>
    </BrowserRouter>
  </>
);

export default App;
