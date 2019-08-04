
const initialState = {
    flights: [],
    error: null
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'FLIGHTS_LOADED':
            return {
                flights: action.payload,
                error: null
            };
        case 'FLIGHTS_ERROR':
            return {
                flights: [],
                error: action.payload
            }
        default:
            return state;
    }
};

export default reducer;