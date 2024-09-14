import axios from 'axios';
import { server } from '../../server';

// Action to add a new daily price
export const addDailyPrice = (category,
    name,
    price1,
    price2,
    price3,
    price4,) => async (dispatch) => {
    try {
        dispatch({
            type: 'addDailyPriceRequest',
        });

        // Send a POST request to the server to add a new daily price
        const { data } = await axios.post(
            `${server}/dailyPrice/daily-price/add`,
            {
                category,
                name,
                price1,
                price2,
                price3,
                price4,
            }
        );

        dispatch({
            type: 'addDailyPriceSuccess',
            payload: data.dailyPrice,
        });
    } catch (error) {
        dispatch({
            type: 'addDailyPriceFail',
            payload: error.response.data.message,
        });
    }
};

// Action to update an existing daily price
export const updateDailyPrice = (id, price1,
    price2,
    price3,
    price4,) => async (dispatch) => {
    try {
        dispatch({
            type: 'updateDailyPriceRequest',
        });

        // Send a PUT request to the server to update the daily price
        const { data } = await axios.put(
            `${server}/dailyPrice/daily-price/update/${id}`,
            {
                price1,
                price2,
                price3,
                price4,
            }
        );

        dispatch({
            type: 'updateDailyPriceSuccess',
            payload: data.updatedPrice,
        });
    } catch (error) {
        dispatch({
            type: 'updateDailyPriceFail',
            payload: error.response.data.message,
        });
    }
};

// Action to fetch daily prices
export const fetchDailyPrices = () => async (dispatch) => {
    try {
        dispatch({
            type: 'fetchDailyPricesRequest',
        });

        // Send a GET request to the server to fetch daily prices
        const { data } = await axios.get(`${server}/dailyPrice/daily-price`);

        dispatch({
            type: 'fetchDailyPricesSuccess',
            payload: data.dailyPrices,
        });
    } catch (error) {
        dispatch({
            type: 'fetchDailyPricesFail',
            payload: error.response.data.message,
        });
    }
};
