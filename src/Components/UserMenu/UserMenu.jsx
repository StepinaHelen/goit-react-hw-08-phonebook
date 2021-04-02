import React from 'react';
import { connect } from 'react-redux';
import authSelectors from '../../redux/Auth/auth-selectors'
import authOperation from '../../redux/Auth/auth-operation'
// import { authSelectors, authOperations } from '../../redux/auth';
// import defaultAvatar from './default-avatar.png';
import kotik from './kotik.jpg';

const UserMenu = ({ avatar, name, onLogout }) => (
  <div>
    
        <span>Welcome, {name}! </span>
        <img src={avatar} alt="" width="75"  />
    <button type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);
const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
  avatar: kotik,
});

const mapDispatchToProps = {
  onLogout: authOperation.logout,
};
export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
// export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);