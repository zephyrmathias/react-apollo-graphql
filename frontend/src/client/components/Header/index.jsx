import React from 'react';
import { NavLink } from 'react-router-dom';
import StyledHeader from './StyledHeader';

const Header = () => (
  <StyledHeader>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/channels">Channels</NavLink>
  </StyledHeader>
);

export default Header;
