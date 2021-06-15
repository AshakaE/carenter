import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Bookings from './Bookings';
import Cars from './Cars';
import Home from './Home';
import User from './User';

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
