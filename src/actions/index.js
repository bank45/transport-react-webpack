const allStationLoaded = (allStation) => {
    return {
        type: 'ALLSTATION_LOADED',
        payload: allStation
    }
}

const scheduleLoaded = (newFlights) => {
    return {
        type: 'FLIGHTS_LOADED',
        payload: newFlights
    };
};

const flightsError = (error) => {
    return {
        type: 'FLIGHTS_ERROR',
        payload: error
    }
}

export {
    allStationLoaded,
    scheduleLoaded,
    flightsError
}