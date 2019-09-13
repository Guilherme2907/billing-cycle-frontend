import React, { Component } from "react";

import Grid from "../common/layout/grid";
import Row from "../common/layout/row";
import ValueBox from "../common/widget/valueBox";

export default  ({credit,debt}) => (
    <Grid cols='12'>
        <fieldset>
            <legend>Resumo</legend>
            <Row>
                <ValueBox cols='12 4' color='green' icon='bank' value={credit} text='Total de créditos'/>
                <ValueBox cols='12 4' color='red' icon='credit-card' value={debt} text='Total de débitos'/>
                <ValueBox cols='12 4' color='blue' icon='money' value={credit - debt} text='Valor consolidado'/>
            </Row>
        </fieldset>
    </Grid>
)
