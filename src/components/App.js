import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Bookings from '../containers/Bookings';
import Cars from '../containers/Cars';
import User from '../containers/User';
import Home from './Home';

const App = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/bookings">
          <Bookings />
        </Route>
        <Route exact path="/cars">
          <Cars />
        </Route>
        <Route exact path="/user">
          <User />
        </Route>
      </Switch>
    </BrowserRouter>
  </>
);

export default App;
