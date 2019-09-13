import React, { Component } from "react";
import Grid from "../common/layout/grid";

import { Field } from "redux-form";
import Input from "../common/form/input";

export default class CreditList extends Component {
  render() {
    let renderRows = () => {
      return (
        <tr>
          <td>
            <Field name="credits[0].name" component={Input}  placeholder='Informe o nome' readOnly={this.props.readOnly}/>
          </td>
          <td>
            <Field name="credits[0].value" component={Input}  placeholder='Informe o valor' readOnly={this.props.readOnly}/>
          </td>
          <td></td>
        </tr>
      );
    };
    return (
      <Grid cols={this.props.cols}>
        <fieldset>
          <legend>Créditos</legend>
          <table className="table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Valor</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>{renderRows()}</tbody>
          </table>
        </fieldset>
      </Grid>
    );
  }
}


