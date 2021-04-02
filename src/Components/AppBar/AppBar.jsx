import React from 'react';
import Navigation from '../Navigation';
import Authorization from '../Authorization';
import UserMenu from '../UserMenu'
import { connect } from 'react-redux';
import authSelectors from '../../redux/Auth/auth-selectors'


const AppBar = ({isAuthenticated}) => {
  return (
    <header>
      <Navigation />{isAuthenticated? <UserMenu />: <Authorization />}
    
    </header>
  );
};
const mapStateToPros = (state)=>({
  isAuthenticated: authSelectors.getIsAuthenticated(state)
})
export default connect(mapStateToPros)(AppBar);
