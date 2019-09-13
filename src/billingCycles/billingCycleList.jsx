import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as BillingActions from "./billingCycleActions";
import Button from "../common/template/button";

class BillingCycleList extends Component {
  componentWillMount() {
    this.props.getList();
  }

  renderRows() {
    const list = this.props.list;
    return list.map(bc => {
      return (
        <tr key={bc._id}>
          <td>{bc.name}</td>
          <td>{bc.month}</td>
          <td>{bc.year}</td>
          <td className="buttonsActions">
            <Button
              type="button"
              classe="warning"
              icon="pencil"
              onClick={() => this.props.showTabAction(bc, "tabUpdate")}
            />
            <Button
              type="button"
              classe="danger"
              icon="trash-o"
              onClick={() => this.props.showTabAction(bc, "tabDelete")}
            />
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Mês</th>
              <th>Ano</th>
              <th className="tableActions">Ações</th>
            </tr>
          </thead>
          <tbody>{this.renderRows()}</tbody>
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
