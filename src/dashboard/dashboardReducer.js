const INITIAL_STATE = { summary: { credit: 0, debt: 0 } };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "GET_SUMMARY":
            return {...state, summary: action.payload.data };
        default:
            return state;
    }
};