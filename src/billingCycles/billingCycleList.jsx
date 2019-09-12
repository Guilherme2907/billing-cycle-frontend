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
      list.map(bc => {
        return (
          <tr key={bc._id}>
            <td>{bc.name}</td>
            <td>{bc.month}</td>
            <td>{bc.year}</td>
            <td><button onClick={() => this.props.showUpdate(bc)} className='btn btn-warning'><i className='fa fa-pencil'></i></button></td>
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
