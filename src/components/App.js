import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Bookings from '../containers/Bookings';
import Cars from '../containers/Cars';
import Home from './Home';
import UserCard from './UserCard';

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
          <UserCard />
        </Route>
      </Switch>
    </BrowserRouter>
  </>
);

export default App;
