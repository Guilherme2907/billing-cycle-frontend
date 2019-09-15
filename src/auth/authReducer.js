const USER = "user";
const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem(USER)),
    validToken: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "TOKEN_VALIDATED":
            if (action.payload) {
                //Testar
                return {...state, validToken: true };
            } else {
                localStorage.removeItem(USER);
                return {...state, validToken: false, user: null };
            }
        case "USER_FETCHED":
            console.log('----------------', action.payload)
            localStorage.setItem(USER, JSON.stringify(action.payload));
            return {...state, user: action.payload, validToken: true };
        default:
            return state;
    }
};