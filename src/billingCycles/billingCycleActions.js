import axios from "axios";
import { toastr } from "react-redux-toastr";
import { reset, initialize } from "redux-form";

import { selectTab, showTabs } from "../common/tabs/tabsAction";

const BASE_URL = "http://localhost:3003/api/billingCycles";
const INITIAL_VALUES = {};

export const getList = () => {
    return dispatch => {
        axios
            .get(BASE_URL)
            .then(resp =>
                dispatch({ type: "BILLING_CYCLES_FETCHED", payload: resp.data })
            );
    };
};

export const createBillingCycle = valuesForm => {
    return submit(valuesForm, "post");
};

export const updateBillingCycle = valuesForm => {
    return submit(valuesForm, "put");
};

export const deleteBillingCycle = valuesForm => {
    return submit(valuesForm, "delete");
};

const submit = (valuesForm, method) => {
    const id = valuesForm._id ? valuesForm._id : "";
    console.log(valuesForm, id, method);
    return dispatch => {
        axios[method](`${BASE_URL}/${id}`, valuesForm)
            .then(resp => {
                toastr.success("Sucesso", "Operação efetuada com sucesso");
                dispatch(init());
            })
            .catch(e =>
                e.response.data.errors.forEach(msg => toastr.error("Erro", msg))
            );
    };
};

export const showTabAction = (bc, tab) => {
    return [
        showTabs(tab),
        selectTab(tab),
        initialize("billingCycleForm", bc)
    ];
};

export const init = () => {
    return [
        getList(),
        selectTab("tabList"),
        showTabs("tabList", "tabCreate"),
        initialize("billingCycleForm", INITIAL_VALUES)
    ];
};