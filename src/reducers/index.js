
const initialState = {
    allstation: '',
    flights: '',
    error: null
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ALLSTATION_LOADED':
            return {...state,
                allstation: action.payload,
                error: null
            };
        case 'FLIGHTS_LOADED':
            return { ...state,
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