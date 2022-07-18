import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class TableExpense extends Component {
  // handleDel = (target) => {
  //   const { value } = target;
  //   const { id } = value;
  //   this.handleDel(id);
  // };

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((exp) => (
            <tr key={ exp.id }>
              <td>{exp.description}</td>
              <td>{exp.tag}</td>
              <td>{exp.method }</td>
              <td>{ Number(exp.value).toFixed(2) }</td>
              <td>
                {/* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split */}
                { exp.exchangeRates.name }
              </td>
              <td>
                { Number(exp.exchangeRates[exp.currency].ask).toFixed(2) }
              </td>
              <td>
                {/* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseFloat */}
                { parseFloat(exp.exchangeRates[exp.currency]
                  .ask * exp.value).toFixed(2)}
              </td>
              <td>Real</td>
            </tr>
          ))}
        </tbody>
        {/* <button
          data-testid="delete-btn"
          onClick={ () => this.handleDel(id) }
          type="button"
        >
          Deletar

        </button> */}
        {/* </td> */}
        {/* // </tr> */}
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  wallet: state.wallet.currency,
  expenses: state.wallet.expenses,
});

TableExpense.propTypes = {
  // deletaDespesa: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps)(TableExpense);
