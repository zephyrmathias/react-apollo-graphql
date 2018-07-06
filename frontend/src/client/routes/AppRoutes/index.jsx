import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import ChannelPage from '../../pages/ChannelPage';

const AppRoutes = () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/channels" exact component={ChannelPage} />
  </Switch>
);

export default AppRoutes;
