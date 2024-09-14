// import axios from 'axios';
// import { server } from "../../server";

// // Action to create a subscription after processing payment
// export const createSubscription = (email, planType) => async (dispatch) => {
//     try {
//         dispatch({ type: 'SUBSCRIPTION_REQUEST' });

//         // Send a request to create a subscription
//         const { data } = await axios.post(`${server}/sub/create-subscription`, {
//             email,
//             planType,
//             withCredentials: true,
//         });

//         dispatch({
//             type: 'SUBSCRIPTION_SUCCESS',
//             payload: data.subscription,
//         });
//     } catch (error) {
//         dispatch({
//             type: 'SUBSCRIPTION_FAIL',
//             payload: error.response.data.message,
//         });
//     }
// };


import axios from 'axios';
import { server } from '../../server';

// Define action types
export const SUBSCRIPTION_DETAILS_REQUEST = 'SUBSCRIPTION_DETAILS_REQUEST';
export const SUBSCRIPTION_DETAILS_SUCCESS = 'SUBSCRIPTION_DETAILS_SUCCESS';
export const SUBSCRIPTION_DETAILS_FAIL = 'SUBSCRIPTION_DETAILS_FAIL';

// Action to create a subscription
export const createSubscription = (email, planType) => async (dispatch) => {
    try {
        // Dispatch a request action
        dispatch({ type: 'SUBSCRIPTION_CREATE_REQUEST' });

        // Send a POST request to create the subscription
        const { data } = await axios.post(`${server}/sub/create-subscription`, {
            email,
            planType,
            withCredentials: true,
        });

        // Dispatch a success action with the subscription data
        dispatch({
            type: 'SUBSCRIPTION_CREATE_SUCCESS',
            payload: data.subscription,
        });
    } catch (error) {
        // Dispatch a fail action with the error message
        dispatch({
            type: 'SUBSCRIPTION_CREATE_FAIL',
            payload: error.response ? error.response.data.message : error.message,
        });
    }
};

// Action to fetch the user's subscription details
export const fetchAllSubscriptionDetails = () => async (dispatch) => {
    try {
        // Dispatch a request action
        dispatch({ type: SUBSCRIPTION_DETAILS_REQUEST });

        // Send a GET request to fetch all subscription details
        const { data } = await axios.get(`${server}/sub/details`);

        // Dispatch a success action with the subscription data
        dispatch({
            type: SUBSCRIPTION_DETAILS_SUCCESS,
            payload: data.subscriptions,
        });
    } catch (error) {
        // Dispatch a fail action with the error message
        dispatch({
            type: SUBSCRIPTION_DETAILS_FAIL,
            payload: error.response ? error.response.data.message : error.message,
        });
    }
};


