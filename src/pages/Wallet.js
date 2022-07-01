import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencies } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCurrencies());
  }

  render() {
    const { email, totalGastos } = this.props;
    return (
      <header>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">
          {/* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/
            Reference/Global_Objects/Number/toFixed */}
          {!totalGastos ? 0 : Number(totalGastos).toFixed(2) }
        </p>
        <p data-testid="header-currency-field">BRL</p>
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
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Wallet);
