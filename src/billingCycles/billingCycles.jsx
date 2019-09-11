import React, { Component } from "react";
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tabs/tabs';
import TabsHeader from '../common/tabs/tabsHeader';
import TabsContent from '../common/tabs/tabsContent';
import TabContent from '../common/tabs/tabContent';
import TabHeader from '../common/tabs/tabHeader';


export default class billingCycles extends Component {
  render() {
    return (
       <div>
            <ContentHeader title="Ciclo de Faturamentos" subTitle="Cadastro" />
            <Content>   
                <Tabs>
                    <TabsHeader>
                        <TabHeader label="Listar" icon="bars" targe="tabList" />
                        <TabHeader label="Incluir" icon="plus" targe="tabCreate" />
                        <TabHeader label="Alterar" icon="pencil" targe="tabUpdate" />
                        <TabHeader label="Excluir" icon="trash-o" targe="tabDelete" />
                    </TabsHeader>
                    <TabsContent>

                    </TabsContent>
                </Tabs>
            </Content>
       </div>
    )
  }
}
