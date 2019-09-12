import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tabs/tabs';
import TabsHeader from '../common/tabs/tabsHeader';
import TabsContent from '../common/tabs/tabsContent';
import TabContent from '../common/tabs/tabContent';
import TabHeader from '../common/tabs/tabHeader';
import BillingCyclesList from './billingCycleList'
import * as TabsActions from "../common/tabs/tabsAction";


class BillingCycles extends Component {
  componentWillMount() {
    this.props.selectTab('tabList')
    this.props.showTabs('tabList','tabCreate')
  }

  render() {
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
                      <TabContent id="tabList"><BillingCyclesList /></TabContent>
                      <TabContent id="tabCreate"><h1>Create</h1></TabContent>
                      <TabContent id="tabUpdate"><h1>Update</h1></TabContent>
                      <TabContent id="tabDelete"><h1>Delete</h1></TabContent>
                    </TabsContent>
                </Tabs>
            </Content>
       </div>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(TabsActions, dispatch);

export default connect(null,mapDispatchToProps)(BillingCycles);
