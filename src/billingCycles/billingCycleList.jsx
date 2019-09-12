import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as BillingActions from "./billingCycleActions";

class BillingCycleList extends Component {
  componentWillMount() {
    this.props.getList();
  }

  render() {
    const { list } = this.props;

    let renderRows = () =>
      list.map(b => {
        return (
          <tr key={b._id}>
            <td>{b.name}</td>
            <td>{b.month}</td>
            <td>{b.year}</td>
          </tr>
        );
      });

    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Mês</th>
              <th>Ano</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {renderRows()}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: state.billingcycles.list
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(BillingActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BillingCycleList);
