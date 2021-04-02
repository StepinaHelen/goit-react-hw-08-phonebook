import React, { Component } from 'react';
import { connect } from 'react-redux';
import operation from '../redux/Auth/auth-operation';

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
      <div>
        <h1>Страница логина</h1>

        <form
          onSubmit={this.handleSubmit}
          // autoComplete="off"
        >
          <label>
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
          </label>

          <button type="submit">Войти</button>
        </form>
      </div>
    );
  }
}
const mapDispatchtoProps = {
  onLogin: operation.login,
};
export default connect(null,mapDispatchtoProps)(LoginPage);
