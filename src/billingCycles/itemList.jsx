import React, { Component } from "react";
import Grid from "../common/layout/grid";
import Button from "../common/template/button";
import If from "../common/tabs/operator/if";

import { Field, arrayInsert, arrayRemove } from "redux-form";
import Input from "../common/form/input";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class ItemList extends Component {
  addRow(index, item = {}) {
    if (!this.props.readOnly) {
      this.props.arrayInsert("billingCycleForm", this.props.field, index, item);
    }
  }

  removeRow(index) {
    if (!this.props.readOnly) {
      this.props.arrayRemove("billingCycleForm", this.props.field, index);
    }

    if (this.props.list.length === 1) {
      this.addRow(index);
    }
  }

  renderRows() {
    const list = this.props.list || [];
    return list.map((item, index) => {
      return (
        <tr key={index}>
          <td>
            <Field
              name={`${this.props.field}[${index}].name`}
              component={Input}
              placeholder="Informe o nome"
              readOnly={this.props.readOnly}
            />
          </td>
          <td>
            <Field
              name={`${this.props.field}[${index}].value`}
              component={Input}
              placeholder="Informe o valor"
              readOnly={this.props.readOnly}
            />
          </td>
          <If test={this.props.showStatus}>
          <td>
            <Field
              name={`${this.props.field}[${index}].status`}
              component={Input}
              placeholder="Status"
              readOnly={this.props.readOnly}
            />
          </td>
          </If>
          <td className="buttonsActions">
            <Button
              classe="success"
              icon="plus"
              type="button"
              onClick={() => this.addRow(index + 1)}
            />
            <Button
              classe="warning"
              icon="clone"
              type="button"
              onClick={() => this.addRow(index + 1, item)}
            />
            <Button
              classe="danger"
              icon="trash-o"
              type="button"
              onClick={() => this.removeRow(index)}
            />
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <Grid cols={this.props.cols}>
        <fieldset>
          <legend>{this.props.label}</legend>
          <table className="table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Valor</th>
                <If test={this.props.showStatus}>
                  <th>Status</th>
                </If>
                <th className="tableActions">Ações</th>
              </tr>
            </thead>
            <tbody>{this.renderRows()}</tbody>
          </table>
        </fieldset>
      </Grid>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ arrayInsert, arrayRemove }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(ItemList);
