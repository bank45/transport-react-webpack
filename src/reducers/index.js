
const initialState = {
    allstation: '',
    flights: '',
    station:'',
    error: null
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'SET_STATION':
            return {...state,
                station: action.payload,
                error: null
            };
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