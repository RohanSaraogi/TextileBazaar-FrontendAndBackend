const initialState = {
    advertisements: [],
    loading: false,
    error: null,
};


export const advertisementReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'addAdvertisementRequest':
        case 'updateAdvertisementRequest':
        case 'deleteAdvertisementRequest':
        case 'fetchAdvertisementsRequest':
            return {
                ...state,
                loading: true,
                error: null,
            };

        case 'addAdvertisementSuccess':
            return {
                ...state,
                loading: false,
                advertisements: [...state.advertisements, action.payload],
            };

        case 'updateAdvertisementSuccess':
            return {
                ...state,
                loading: false,
                advertisements: state.advertisements.map((ad) =>
                    ad._id === action.payload._id ? action.payload : ad
                ),
            };

        case 'deleteAdvertisementSuccess':
            return {
                ...state,
                loading: false,
                advertisements: state.advertisements.filter((ad) => ad._id !== action.payload),
            };

        case 'fetchAdvertisementsSuccess':
            return {
                ...state,
                loading: false,
                advertisements: action.payload,
            };

        case 'addAdvertisementFail':
        case 'updateAdvertisementFail':
        case 'deleteAdvertisementFail':
        case 'fetchAdvertisementsFail':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

export default advertisementReducer;
