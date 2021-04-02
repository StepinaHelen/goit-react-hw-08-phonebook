import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const Authorization = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul>
        <li className="navbar-brand">
          <NavLink
            to={routes.registration}
            className="current"
            activeClassName="selected"
          >
            Registration
          </NavLink>
        </li>
        <li className="navbar-brand">
          <NavLink
            to={routes.login}
            className="current"
            activeClassName="selected"
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Authorization;
