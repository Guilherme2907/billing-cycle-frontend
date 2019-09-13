import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as BillingCyclesActions from "./billingCycleActions";
import Button from "../common/template/button";

import LabelAndInput from "../common/form/labelAndInput";
import CreditList from './creditList';

class BillingCyclesForm extends Component {
  componentWillUnmount() {
    this.props.init();
  }

  render() {
    const { handleSubmit, readOnly } = this.props;
    return (
      <form role="form" onSubmit={handleSubmit}>
        <div className="box-body">
          <Field
            name="name"
            component={LabelAndInput}
            label="Nome"
            type="text"
            cols="12 4"
            placeholder="Informe o nome"
            readOnly={readOnly}
          />
          <Field
            name="month"
            component={LabelAndInput}
            label="Mês"
            type="number"
            cols="12 4"
            placeholder="Informe o mês"
            readOnly={readOnly}
          />
          <Field
            name="year"
            component={LabelAndInput}
            label="Ano"
            type="number"
            cols="12 4"
            placeholder="Informe o ano"
            readOnly={readOnly}
          />
          <CreditList cols='12 6' readOnly={this.props.readOnly}/>
        </div>
        <div className="box-footer">
          <Button type="submit" classe={this.props.submitClass}>
            {this.props.submitLabel}
          </Button>
          <Button type="button" classe="default" onClick={this.props.init}>
            Cancelar
          </Button>
        </div>
      </form>
    );
  }
}

const BillingCycleForm = reduxForm({
  form: "billingCycleForm",
  destroyOnUnmount: false
})(BillingCyclesForm);

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators(BillingCyclesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BillingCycleForm);
