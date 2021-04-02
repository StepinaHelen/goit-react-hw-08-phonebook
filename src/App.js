import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from './Components/Container';
import AppBar from './Components/AppBar';
import ContactsPage from './views/ContactsPage';
import HomePage from './views/HomePage';
import LoginPage from './views/LoginPage';
import RegistrationPage from './views/RegistrationPage';
import authOperation from './redux/Auth/auth-operation'
import { connect } from 'react-redux';

import { Switch, Route, Redirect } from 'react-router-dom';
import Spinner from './Components/Spinner';
import routes from './routes';
import { Particle } from 'jparticles'
import styles from './App.module.css'


class App extends React.Component{
  componentDidMount() {
    this.props.onGetCurrentUser();
     new Particle('#demo')
  }
  render() {
    return (
     
      // <Container>
        <div>
        <div id="demo" className={styles.demo}>
        </div>
        <Container>
      <ToastContainer />
      <AppBar />
      <Route exact path={routes.home} component={HomePage} />
      <Route exact path={routes.contacts} component={ContactsPage} />
      <Route exact path={routes.login} component={LoginPage} />
          <Route exact path={routes.registration} component={RegistrationPage} />
          </Container>
         </div>
      //  {/* </Container> */}
       
  );
  }
}



// function App() {
//   return (
//     <Container>
//       <ToastContainer />
//       <AppBar />
//       <Route exact path={routes.home} component={HomePage} />
//       <Route exact path={routes.contacts} component={ContactsPage} />
//       <Route exact path={routes.login} component={LoginPage} />
//       <Route exact path={routes.registration} component={RegistrationPage} />
//     </Container>
//   );
// }
const mapDispathToProps = {
  onGetCurrentUser:authOperation.getCurrentUser
}

export default connect(null, mapDispathToProps)(App);
