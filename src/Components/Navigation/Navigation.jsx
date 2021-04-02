import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';


const Navigation = () => {
  return (
    <div>
      <NavLink
        exact
        to={routes.home}
        className="current"
        id="home"
        activeClassName="selected"
      >
        Home
      </NavLink>
      <NavLink
        exact
        to={routes.contacts}
        className="current"
        id="contacts"
        activeClassName="selected"
      >
        Contacts
      </NavLink>
    </div>
  );
};
export default Navigation;
