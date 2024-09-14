import axios from 'axios';
import { server } from '../../server';

// Action to add a new advertisement
export const addAdvertisement = (name,link,startDate,endDate,images) => async (dispatch) => {
    try {
        dispatch({
            type: 'addAdvertisementRequest',
        });

        // Send a POST request to the server to add a new advertisement
        const { data } = await axios.post(
            `${server}/ads/advertisement/add`,
            name,link,startDate,endDate,images,
            {
                headers: {
                  'Content-Type': 'application/json',
              },
              // Enable sending cookies with the request
              withCredentials: true,  
      
              }
        );

        dispatch({
            type: 'addAdvertisementSuccess',
            payload: data.advertisement,
        });
    } catch (error) {
        dispatch({
            type: 'addAdvertisementFail',
            payload: error.response.data.message,
        });
    }
};

// Action to update an existing advertisement
// export const updateAdvertisement = (id, name,link,startDate,endDate,images) => async (dispatch) => {
//     try {
//         dispatch({
//             type: 'updateAdvertisementRequest',
//         });

//         // Send a PUT request to the server to update the advertisement
//         const { data } = await axios.put(
//             `${server}/ads/advertisement/update/${id}`,
//             name,link,startDate,endDate,images
//         );

//         dispatch({
//             type: 'updateAdvertisementSuccess',
//             payload: data.advertisement,
//         });
//     } catch (error) {
//         dispatch({
//             type: 'updateAdvertisementFail',
//             payload: error.response.data.message,
//         });
//     }
// };

// Action to fetch advertisements
export const fetchAdvertisements = () => async (dispatch) => {
    try {
        dispatch({
            type: 'fetchAdvertisementsRequest',
        });

        // Send a GET request to the server to fetch advertisements
        const { data } = await axios.get(`${server}/ads/advertisements`);

        dispatch({
            type: 'fetchAdvertisementsSuccess',
            payload: data.advertisements,
        });
    } catch (error) {
        dispatch({
            type: 'fetchAdvertisementsFail',
            payload: error.response.data.message,
        });
    }
};

// Action to delete an advertisement
export const deleteAdvertisement = (id) => async (dispatch) => {
    try {
        dispatch({
            type: 'deleteAdvertisementRequest',
        });

        // Send a DELETE request to the server to delete the advertisement
        await axios.delete(
            `${server}/ads/advertisement/delete/${id}`,
        {
            withCredentials: true,
          },
        );

        dispatch({
            type: 'deleteAdvertisementSuccess',
            payload: id,
        });
    } catch (error) {
        dispatch({
            type: 'deleteAdvertisementFail',
            payload: error.response.data.message,
        });
    }
};
