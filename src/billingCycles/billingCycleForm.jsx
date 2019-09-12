import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as BillingCyclesActions from "./billingCycleActions";

import LabelAndInput from "../common/form/labelAndInput";

class BillingCyclesForm extends Component {
  componentWillUnmount() {
    this.props.init();
  }

  render() {
    const { handleSubmit } = this.props;
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
          />
          <Field
            name="month"
            component={LabelAndInput}
            label="Mês"
            type="number"
            cols="12 4"
            placeholder="Informe o mês"
          />
          <Field
            name="year"
            component={LabelAndInput}
            label="Ano"
            type="number"
            cols="12 4"
            placeholder="Informe o ano"
          />
        </div>
        <div className="box-footer">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button
            onClick={this.props.init}
            type="button"
            className="btn btn-default"
          >
            Cancelar
          </button>
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
