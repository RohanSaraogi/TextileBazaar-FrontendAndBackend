// const initialState = {
//     loading: false,
//     subscription: null,
//     error: null,
// };

// // Subscription reducer
// const subscriptionReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'SUBSCRIPTION_REQUEST':
//             return {
//                 ...state,
//                 loading: true,
//                 error: null,
//             };
//         case 'SUBSCRIPTION_SUCCESS':
//             return {
//                 ...state,
//                 loading: false,
//                 subscription: action.payload,
//                 error: null,
//             };
//         case 'SUBSCRIPTION_FAIL':
//             return {
//                 ...state,
//                 loading: false,
//                 error: action.payload,
//             };
//         default:
//             return state;
//     }
// };

// export default subscriptionReducer;


// const initialState = {
//     loading: false,
//     subscription: null,
//     error: null,
// };

// export const subscriptionReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'SUBSCRIPTION_REQUEST':
//         case 'SUBSCRIPTION_CREATE_REQUEST':
//             return {
//                 ...state,
//                 loading: true,
//             };

//         case 'SUBSCRIPTION_SUCCESS':
//             return {
//                 ...state,
//                 loading: false,
//                 subscription: action.payload,
//                 error: null,
//             };

//         case 'SUBSCRIPTION_CREATE_SUCCESS':
//             return {
//                 ...state,
//                 loading: false,
//                 subscription: action.payload,
//                 error: null,
//             };

//         case 'SUBSCRIPTION_FAIL':
//         case 'SUBSCRIPTION_CREATE_FAIL':
//             return {
//                 ...state,
//                 loading: false,
//                 error: action.payload,
//             };

//         default:
//             return state;
//     }
// };
// export default subscriptionReducer;


const initialState = {
    loading: false,
    subscription: null,
    error: null,
};

export const subscriptionReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SUBSCRIPTION_REQUEST':
            return {
                ...state,
                loading: true,
            };

        case 'SUBSCRIPTION_SUCCESS':
            return {
                ...state,
                loading: false,
                subscription: action.payload,
                error: null,
            };

        case 'SUBSCRIPTION_FAIL':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

export default subscriptionReducer;