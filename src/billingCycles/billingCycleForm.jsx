import React, { Component } from "react";
import { Field, reduxForm, formValueSelector } from "redux-form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as BillingCyclesActions from "./billingCycleActions";
import Button from "../common/template/button";
import Summary from './summary';

import LabelAndInput from "../common/form/labelAndInput";
import ItemList from "./itemList";

class BillingCyclesForm extends Component {
  componentWillUnmount() {
    this.props.init();
  }

  calculateSummary() {
    const sum = (t,v) => t+v;
    return {
      sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum),
      sumOfDebts: this.props.debts.map(d => +d.value || 0).reduce(sum)
    }
  }

  render() {
    const { handleSubmit, readOnly,credits,debts } = this.props;
    const { sumOfCredits,sumOfDebts} = this.calculateSummary()
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
          <Summary credit={sumOfCredits} debt={sumOfDebts} />
          <ItemList cols="12 6" readOnly={this.props.readOnly} list={credits} label='Créditos' field='credits'/>
          <ItemList cols="12 6" readOnly={this.props.readOnly} list={debts} label='Débitos' field='debts' showStatus/>
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

const selector = formValueSelector("billingCycleForm");


const mapStateToProps = state => ({
  credits: selector(state,'credits'),
  debts: selector(state,'debts')
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(BillingCyclesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BillingCycleForm);
