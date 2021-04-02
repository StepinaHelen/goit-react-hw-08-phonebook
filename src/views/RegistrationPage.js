import React, { Component } from 'react';
import { connect } from 'react-redux';
import operation from '../redux/Auth/auth-operation';

class RegistrationPage extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };
  handleChange = e => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };
  // handleChange = ({ target: { name, value } }) => {
  //   console.log(name);
  //   this.setState({ [name]: value });
  // };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div>
        <h1>Страница регистрации</h1>

        <form
          onSubmit={this.handleSubmit}
          // autoComplete="off"
        >
          <label>
            Имя
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>

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

          <button type="submit">Sign in</button>
        </form>
      </div>
    );
  }
}
const mapDispatchtoProps = {
  onSubmit: operation.registration,
};

export default connect(null, mapDispatchtoProps)(RegistrationPage);
