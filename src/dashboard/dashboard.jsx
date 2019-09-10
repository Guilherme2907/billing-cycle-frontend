import React, { Component } from "react";
import ContentHeader from "../common/template/contentHeader";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Content from "../common/template/content";
import ValueBox from "../common/widget/valueBox";
import Row from "../common/layout/row";
import * as DashBoardActions from "./dashBoardActions";

class Dashboard extends Component {
  componentWillMount() {
    this.props.getSummary();
  }
  render() {
    const { debt, credit } = this.props.summary;
    return (
      <div>
        <ContentHeader title="DashBoard" subTitle="versão 1.0" />
        <Content>
          <Row>
            <ValueBox
              cols="12 4"
              color="green"
              icon="bank"
              value={`R$ ${credit}`}
              text="Total de créditos"
            />
            <ValueBox
              cols="12 4"
              color="red"
              icon="credit-card"
              value={`R$ ${debt}`}
              text="Total de débitos"
            />
            <ValueBox
              cols="12 4"
              color="blue"
              icon="money"
              value={`R$ ${credit - debt}`}
              text="Valor consolidado"
            />
          </Row>
        </Content>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  summary: state.dashboard.summary
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(DashBoardActions, dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);
