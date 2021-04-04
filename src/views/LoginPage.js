import React, { Component } from 'react';
import { connect } from 'react-redux';
import operation from '../redux/Auth/auth-operation';
import styles from './common.module.scss';
import { TextField ,Button } from '@material-ui/core';

class LoginPage extends Component {
  state = {
    email: '',
    password: '',
  };
 handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  // handleChange = ({ target: { name, value } }) => {
  //   this.setState({ [name]: value });
  // };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className={styles.LoginRegistrationPage}>
        <h2>Please sign in to your account</h2>

        <form 
          onSubmit={this.handleSubmit}
        >

          <div className={styles.margin}>
          <TextField id="outlined-basic" label="E-mail" variant="outlined" className={styles.textField} size="small"  type="email"
              name="email"
              value={email}
              onChange={this.handleChange} />
          </div>
          <div  className={styles.margin}>
          <TextField id="outlined-basic" label="Password" variant="outlined" className={styles.textField} size="small" type="password"
              name="password"
              value={password}
              onChange={this.handleChange} />
            
          </div>
          <div>
<Button variant="outlined" color="primary" className={styles.button} type="submit">
  Sign In
            </Button>
            </div>
          {/* <label>
            Почта
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Пароль
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label> */}

          {/* <button type="submit">Войти</button> */}
        </form>
      </div>
    );
  }
}
const mapDispatchtoProps = {
  onLogin: operation.login,
};
export default connect(null,mapDispatchtoProps)(LoginPage);
