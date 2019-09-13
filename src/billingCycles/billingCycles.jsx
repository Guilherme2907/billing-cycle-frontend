import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import ContentHeader from "../common/template/contentHeader";
import Content from "../common/template/content";
import Tabs from "../common/tabs/tabs";
import TabsHeader from "../common/tabs/tabsHeader";
import TabsContent from "../common/tabs/tabsContent";
import TabContent from "../common/tabs/tabContent";
import TabHeader from "../common/tabs/tabHeader";
import BillingCyclesList from "./billingCycleList";
import BillingCyclesForm from "./billingCycleForm";
import * as TabsActions from "../common/tabs/tabsAction";
import * as BillingCyclesActions from "./billingCycleActions";

class BillingCycles extends Component {
  componentWillMount() {
    this.props.init()
  }

  render() {
    const { createBillingCycle, updateBillingCycle,deleteBillingCycle } = this.props;

    return (
      <div>
        <ContentHeader title="Ciclo de Faturamentos" subTitle="Cadastro" />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label="Listar" icon="bars" target="tabList" />
              <TabHeader label="Incluir" icon="plus" target="tabCreate" />
              <TabHeader label="Alterar" icon="pencil" target="tabUpdate" />
              <TabHeader label="Excluir" icon="trash-o" target="tabDelete" />
            </TabsHeader>
            <TabsContent>
              <TabContent id="tabList">
                <BillingCyclesList />
              </TabContent>
              <TabContent id="tabCreate">
                <BillingCyclesForm onSubmit={createBillingCycle} submitClass='success' submitLabel='Salvar'/>
              </TabContent>
              <TabContent id="tabUpdate">
                <BillingCyclesForm onSubmit={updateBillingCycle} submitClass='warning' submitLabel='Editar'/>
              </TabContent>
              <TabContent id="tabDelete">
                <BillingCyclesForm onSubmit={deleteBillingCycle} readOnly submitClass='danger' submitLabel='Excluir'/>
              </TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...TabsActions, ...BillingCyclesActions }, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(BillingCycles);
