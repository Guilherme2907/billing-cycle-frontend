import { combineReducers } from "redux";

import dashboard from "../dashboard/dashboardReducer";

const rootReducer = combineReducers({
    dashboard
});

export default rootReducer;