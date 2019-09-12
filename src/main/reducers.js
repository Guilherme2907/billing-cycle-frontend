import { combineReducers } from "redux";

import dashboard from "../dashboard/dashboardReducer";
import tab from "../common/tabs/tabsReducer";
import billingcycles from "../billingcycles/billingCyclesReducer";

const rootReducer = combineReducers({
    dashboard,
    tab,
    billingcycles,
});

export default rootReducer;