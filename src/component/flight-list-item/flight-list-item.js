import React from 'react';

const FlightItem = ({ arrival, direction }) => {

    return (
        <div >
            <div>{arrival}<a href="#" className="btn btn-success btn-xs">Btn</a></div>
            <div>{direction}</div>

        </div>
    );
};

export default FlightItem;