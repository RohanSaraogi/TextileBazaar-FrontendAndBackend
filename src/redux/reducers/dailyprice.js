// Define the initial state
const initialState = {
    dailyPrices: [],
    loading: false,
    error: null,
};

// Define the reducer
const dailyPriceReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'addDailyPriceRequest':
        case 'updateDailyPriceRequest':
        case 'fetchDailyPricesRequest':
            return {
                ...state,
                loading: true,
            };
        case 'addDailyPriceSuccess':
            return {
                ...state,
                loading: false,
                dailyPrices: [...state.dailyPrices, action.payload],
            };
        case 'updateDailyPriceSuccess':
            return {
                ...state,
                loading: false,
                dailyPrices: state.dailyPrices.map((price) =>
                    price._id === action.payload._id ? action.payload : price
                ),
            };
        case 'fetchDailyPricesSuccess':
            return {
                ...state,
                loading: false,
                dailyPrices: action.payload,
            };
        case 'addDailyPriceFail':
        case 'updateDailyPriceFail':
        case 'fetchDailyPricesFail':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default dailyPriceReducer;
