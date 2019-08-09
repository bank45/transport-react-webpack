import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withScheduleService } from '../hoc';
import { allStationLoaded, flightsError } from '../../actions';
import ErrorIndicator from '../error-indicator';

import FlightItem from '../flight-list-item';

class FlightList extends Component {

    async  componentDidMount() {
        const { scheduleService, allStationLoaded, flightsError } = this.props;
        const dataStation = scheduleService.getAllStation();
        const items = {}
        await dataStation
            .then(res => {
                console.log('res: ',res)
                    
                res.countries.forEach((country, index) => {
                    country.regions.forEach((region, num) => {
                        region.settlements.forEach((settlement) => {
                            settlement.stations.forEach((station) => {
                                items[station.codes.yandex_code] = [country.title, region.title, settlement.title, station.title, station.transport_type]
                            })
                        })
                    })
                })
                console.log('items: ',items)
                allStationLoaded(items)
            })
            .catch((err) => flightsError(err));
    }

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
        console.log('FlightList Render: ...', Boolean(flights))

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

const mapStateToProps = ({ allstation, flights, error }) => {
    return { allstation, flights, error }
}

const mapDispatchToProps = {
    allStationLoaded,
    flightsError
}

export default withScheduleService()(
    connect(mapStateToProps, mapDispatchToProps)(FlightList));