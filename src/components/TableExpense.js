import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class TableExpense extends Component {
  handleDel = (target) => {
    const { value } = target;
    const { deletaDespesa } = this.props;
    deletaDespesa(parseInt(value, 10));
  };

  render() {
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
            {/* <td>
              <button
                data-testid="delete-btn"
                onClick={ this.handleDel }
                type="button"
                value={ expense.id }
              >
                Deletar

              </button>
            </td> */}
          </tr>
        </thead>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

TableExpense.propTypes = {
  deletaDespesa: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(TableExpense);
