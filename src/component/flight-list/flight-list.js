import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withScheduleService } from '../hoc';
import { allStationLoaded, flightsError } from '../../actions';
import ErrorIndicator from '../error-indicator';

import FlightItem from '../flight-list-item';

class FlightList extends Component {

    // async  componentDidMount() {
    //     const { scheduleService, allStationLoaded, flightsError } = this.props;
    //     const dataStation = scheduleService.getAllStation();

    //     await dataStation
    //         .then(res => {
    //             allStationLoaded(res)
    //         })
    //         .catch((err) => flightsError(err));
    // }

    componentDidUpdate() {
        console.log('FlightList componentDidUpdate()...')
    }

    onListStops(key) {
        console.log('FlightList > listStops: ...', key)
    }

    render() {
        const { flights, error } = this.props;
        if (error) {
            return <ErrorIndicator />
        }
        console.log('FlightList Render: ...',Boolean(flights))

        return (
            <div>
                {(flights) &&
                    <div>
                        <h1>{flights.date}</h1>
                        <h2>Станция: {flights.station.station_type_name} {flights.station.title}</h2>
                        <h1>{flights.directions[1].title} </h1>
                        <ul className="row">
                            {
                                flights.schedule.map((s) => {
                                    return (
                                        <li key={s.arrival} className="col-lg-10"><FlightItem
                                            arrival={s.arrival}
                                            thread={s.thread.number}
                                            title={s.thread.title}
                                        /></li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = ({ flights, error }) => {
    return { flights, error }
}

const mapDispatchToProps = {
    
    flightsError
}

export default withScheduleService()(
    connect(mapStateToProps, mapDispatchToProps)(FlightList));