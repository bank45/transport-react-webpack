import React from 'react';

const FlightItem = ({ arrival, thread, title, onListStops}) => {

    const date = new Date(arrival)
    var options = {
        // era: 'long',
        // year: 'numeric',
        // month: 'long',
        // day: 'numeric',
        // weekday: 'long',
        // timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric',
        // second: 'numeric'
    };
    return (
        <div className='card text-white bg-dark mb-3' >
            <div className='card-header'>Время: {date.toLocaleString('ru', options)} </div>
            <div className='card-body'>
                <div className='card-title'> рейс: {thread} {title}</div>
                <button onClick={onListStops} href="#" className="btn btn-success btn-xs">Остановки</button>
            </div>
        </div>
    );
};

export default FlightItem;