import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { deletaDespesas } from '../actions';

class TableExpense extends Component {
handleDel = (id) => {
  const { deletaDespesa } = this.props;
  deletaDespesa(id);
  // this.setState({
  //   id,
  // });
};

render() {
  const { expenses/* , deletaDespesa  */ } = this.props;
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
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
            <td>{exp.id}</td>
            <td>{exp.description}</td>
            <td>{exp.tag}</td>
            <td>{exp.method }</td>
            <td>{ Number(exp.value).toFixed(2) }</td>
            <td>
              {/* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split */}
              { exp.exchangeRates[exp.currency].name }
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
            <td>
              <button
                data-testid="delete-btn"
                type="button"
                onClick={ () => this.handleDel(exp.id) }
              >
                Deletar

              </button>
            </td>
          </tr>
        ))}
      </tbody>

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

const mapDispatchToProps = (dispacth) => ({
  deletaDespesa: (id) => dispacth(deletaDespesas(id)),
});

TableExpense.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
  deletaDespesa: PropTypes.shape({}).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TableExpense);
