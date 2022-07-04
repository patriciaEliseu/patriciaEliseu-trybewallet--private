import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencies } from '../actions';
import TableExpense from '../components/TableExpense';

class Wallet extends React.Component {
  componentDidMount() {
    const { saveCurrency } = this.props;
    saveCurrency();
    // console.log(fetch);
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      // colchetes para receber dinâmica/e o valor da chave
      [name]: value,
    });
  };

  render() {
    const { email, totalGastos, currencies } = this.props;
    console.log(this.props);
    return (
      <>
        <header>
          <p data-testid="email-field">{email}</p>
          <p data-testid="total-field">
            {/* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/
      Reference/Global_Objects/Number/toFixed */}
            {!totalGastos ? 0 : Number(totalGastos).toFixed(2)}
          </p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <form>
          <label htmlFor="value-input">
            Despesa:
            <input
              data-testid="value-input"
              type="number"
              value="value"
              name="value"
              id="expense-value"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="description expense">
            Descrição:
            <input
              data-testid="description-input"
              type="text"
              value="description"
              name="description"
              id="expense-description"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="currency">
            Moeda:
            <select
              name="currency"
              id="currency"
              value="currency"
              onChange={ this.handleChange }
            >
              {
                currencies.map((currency, index) => (
                  <option
                    key={ index }
                    value={ currency }
                  >
                    { currency }
                  </option>
                ))
              }
            </select>
          </label>
          <label htmlFor="payment-method">
            pagamento:
            <select
              data-testid="method-input"
              id="method"
              value="method"
              onChange={ this.handleChange }
            >
              <option value="dinheiro">Dinheiro</option>
              <option value="credito">Cartão de crédito</option>
              <option value="debito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="taq-input">
            <select
              className="dropdown"
              data-testid="tag-input"
              id="dropdown_select"
              value="dropdown"
              onChange={ this.handleChange }
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          {/* <button
            onClick={ this.handleAdd }
            type="button"
            value={ expense.id }
          >
            Adicionar
          </button> */}
        </form>
        <TableExpense />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  totalGastos: state.wallet.totalGastos,
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  saveCurrency: () => dispatch(fetchCurrencies()),
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  totalGastos: PropTypes.number.isRequired,
  // dispatch: PropTypes.func.isRequired,
  currencies: PropTypes.number.isRequired,
  saveCurrency: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
