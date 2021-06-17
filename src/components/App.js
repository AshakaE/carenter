import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Bookings from './Bookings';
import Cars from './Cars';
import Home from './Home';
import User from '../containers/User';

const App = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/bookings">
          <BookingsCard />
        </Route>
        <Route path="/cars">
          <CarsCard />
        </Route>
        <Route path="/user">
          <UserCard />
        </Route>
      </Switch>
    </BrowserRouter>
  </>
);

export default App;
