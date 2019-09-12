import { combineReducers } from "redux";
import { reducer as form } from 'redux-form';
import { reducer as toastr } from 'react-redux-toastr'

import dashboard from "../dashboard/dashboardReducer";
import tab from "../common/tabs/tabsReducer";
import billingcycles from "../billingcycles/billingCyclesReducer";

const rootReducer = combineReducers({
    dashboard,
    tab,
    billingcycles,
    form,
    toastr
});

export default rootReducer;