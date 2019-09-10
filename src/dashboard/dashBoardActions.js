import axios from 'axios';
import { request } from 'http';
const BASE_URL = 'http://localhost:3003/api/billingCycles';

export const getSummary = () => {
    return dispatch => {
        axios.get(`${BASE_URL}/summary`)
            .then(resp => dispatch({ type: "GET_SUMMARY", payload: resp }))
    }
}