import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class tableExpense extends Component {
  handleDel = (target) => {
    const { value } = target;
    const { deletaDespesa } = this.props;
    deletaDespesa(parseInt(value, 10));
  };

  render() {
    return (
      <theade>
        <tr>
          <th>Descrição</th>
          <th>Taq</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Edita/Excluir</th>
          <td>
            <button
              data-testid="delete-btn"
              onClick={ this.handleDel }
              type="button"
              value={ expense.id }
            >
              Deletar

            </button>
          </td>
        </tr>
      </theade>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

tableExpense.propTypes = {
  deletaDespesa: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(tableExpense);
