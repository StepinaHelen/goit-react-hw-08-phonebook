import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import { connect } from 'react-redux';
import authSelectors from '../../redux/Auth/auth-selectors'


const Navigation = ({isAuthenticated}) => {
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
      {isAuthenticated && <NavLink
        exact
        to={routes.contacts}
        className="current"
        id="contacts"
        activeClassName="selected"
      >
        Contacts
      </NavLink>}
      
    </div>
  );
};

const mapStateToPros = (state)=>({
  isAuthenticated: authSelectors.getIsAuthenticated(state)
})
export default connect(mapStateToPros)(Navigation);

// export default Navigation;
