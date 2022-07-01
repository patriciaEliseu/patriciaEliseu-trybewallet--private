import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  render() {
    const { email, totalGastos, fetchCurrencies } = this.props;
    return (
      <header>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">
          {/* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed */}
          {!totalGastos ? 0 : Number(totalGastos).toFixed(2) }
        </p>
        <p data-testid="header-currency-field">{ fetchCurrencies }</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  totalGastos: state.totalGastos,
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  totalGastos: PropTypes.number.isRequired,
  fetchCurrencies: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Wallet);
