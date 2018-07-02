import React from 'react';
import { hot } from 'react-hot-loader';
import Header from '../Header';
import AppRoutes from '../../routes/AppRoutes';

const App = () => (
  <div>
    <Header />
    <div>
      App
    </div>
    <AppRoutes />
  </div>
);

export default hot(module)(App);
