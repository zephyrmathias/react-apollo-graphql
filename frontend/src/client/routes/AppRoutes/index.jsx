import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import ProfilePage from '../../pages/ProfilePage';

const AppRoutes = () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/profile" exact component={ProfilePage} />
  </Switch>
);

export default AppRoutes;
