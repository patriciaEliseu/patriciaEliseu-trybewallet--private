import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrencies, addExpense } from '../actions';
import TableExpense from '../components/TableExpense';
import chamaFetch from '../reqFeth';

const ALIMENTACAO = 'Alimentação';

class Wallet extends React.Component {
  state = {
    id: 0,
    value: 0,
    description: '',
    currency: 'USD',
    tag: ALIMENTACAO,
    method: 'Dinheiro',
    // exchangeRates: {},
  };

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

  handleSubmit = async () => {
    // event.preventDefault();
    const chamaAPI = await chamaFetch();
    console.log(chamaAPI);
    // this.setState((prevState) => ({
    //   id: prevState.id + 1,
    // exchangeRates: chamaAPI,
    // }));

    const { id, value, description, currency,
      method, tag } = this.state;
    const expense = {
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: chamaAPI,
    };

    const { saveExpense } = this.props;
    // console.log(value, description, currency,
    // method, tag, exchangeRates);
    saveExpense(expense);
    this.setState((prevState) => ({
      id: prevState.id + 1,
      value: 0,
      description: '',
      currency: 'USD',
      tag: ALIMENTACAO,
      method: 'Dinheiro',
      // exchangeRates: chamaAPI,
    }));
  }

  render() {
    const { value, description, currency, method, tag /* exchangeRates  */ } = this.state;
    const { expenses, email, /*  totalGastos */ currencies } = this.props;
    console.log(expenses);
    const total = expenses.length > 0 && expenses
      .map((exp) => exp.value * exp.exchangeRates[exp.currency].ask)
      .reduce((cur, acc) => cur + acc);

    return (
      <>
        <header>
          <p data-testid="email-field">{email}</p>
          <p data-testid="total-field">
            {/* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/
               Reference/Global_Objects/Number/toFixed  */}
            { Number(total).toFixed(2) }
          </p>
          <p data-testid="header-currency-field">BRL</p>
        </header>
        <form onSubmit={ this.handleSubmit }>
          <label htmlFor="value-input">
            Despesa:
            <input
              data-testid="value-input"
              type="number"
              value={ value }
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
              value={ description }
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
              value={ currency }
              onChange={ this.handleChange }
            >
              {
                currencies.map((currenci, index) => (
                  <option
                    key={ index }
                    // value={ currency }
                  >
                    { currenci }
                  </option>
                ))
              }
            </select>
          </label>
          <label htmlFor="method">
            pagamento:
            <select
              data-testid="method-input"
              name="method"
              id="method"
              value={ method }
              onChange={ this.handleChange }
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag-input">
            <select
              className="dropdown"
              data-testid="tag-input"
              name="tag"
              id="tag-input"
              value={ tag }
              onChange={ this.handleChange }
            >
              <option value={ ALIMENTACAO }>Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <button
            onClick={ this.handleSubmit }
            type="button"
          >
            Adicionar Despesa
          </button>
        </form>
        <TableExpense />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  // totalGastos: state.wallet.totalGastos,
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  saveCurrency: () => dispatch(fetchCurrencies()),
  saveExpense: (expenses) => dispatch(addExpense(expenses)),
});

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  // totalGastos: PropTypes.number.isRequired,
  // dispatch: PropTypes.func.isRequired,
  currencies: PropTypes.number.isRequired,
  saveCurrency: PropTypes.func.isRequired,
  saveExpense: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
