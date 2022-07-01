import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createActionSaveLogin } from '../actions';

class Login extends React.Component {
 state = {
   email: '',
   password: '',
   isDisabled: true,
 };

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({
      // colchetes para receber dinâmica/e o valor da chave
      [name]: value,
    }, () => this.disableButton());
  };

  disableButton = () => {
    const { email, password } = this.state;
    const five = 5;
    if (this.validateEmail(email) > 0 && password.length > five) {
      this.setState({
        isDisabled: false,
      });
    } else {
      this.setState({
        isDisabled: true });
    }
  }

  handleLogin =() => {
    const { email } = this.state;
    const { sendEmail, history } = this.props;
    sendEmail(email);
    history.push('/carteira');
  }

  validateEmail(email) {
    const regex = /\S+@\S+com/;
    return regex.test(email);
  }

  render() {
    const { email, password, isDisabled } = this.state;
    return (
      <>
        <div>Login</div>
        <label htmlFor="email-input">
          Email
          <input
            type="text"
            data-testid="email-input"
            name="email"
            value={ email }
            onChange={ this.handleInput }
          />
        </label>
        <label htmlFor="senha-input">
          password
          <input
            type="password"
            data-testid="password-input"
            name="password"
            value={ password }
            onChange={ this.handleInput }
          />
        </label>
        <button
          type="button"
          onClick={ this.handleLogin }
          disabled={ isDisabled }
        >
          Entrar
        </button>
      </>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  sendEmail: (email) => dispatch(createActionSaveLogin(email)),
});

Login.propTypes = {
  sendEmail: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,

};

export default connect(null, mapDispatchToProps)(Login);
