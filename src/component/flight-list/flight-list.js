import React, { Component } from 'react';
import FlightItem from '../flight-list-item';
import { connect } from 'react-redux';
import { withScheduleService } from '../hoc';
import { scheduleLoaded, flightsError } from '../../actions';
import ErrorIndicator from '../error-indicator';

class FlightList extends Component {

    async  componentDidMount() {
        const { scheduleService, scheduleLoaded, flightsError } = this.props;
        const data = scheduleService.getSchedule();
        await data
            .then(res => {
                this.props.scheduleLoaded(res)
            })
            .catch((err) => flightsError(err));
    }

    render() {
        const { flights, error } = this.props;
        //      console.log('render: ', flights.schedule)
        if (error) {
            return <ErrorIndicator />
        }
        return (
            <div>
                {flights != '' &&
                    <ul className="row">
                        {
                            flights.schedule.map((s) => {
                                return (
                                    <li key={s.arrival} className="col-lg-10"><FlightItem arrival={s.arrival} direction={s.direction} /></li>
                                )
                            })
                        }
                    </ul>
                }
            </div>
        )
    }
}

const mapStateToProps = ({ flights, error }) => {
    return { flights, error }
}

const mapDispatchToProps = {
    scheduleLoaded,
    flightsError
}

export default withScheduleService()(
    connect(mapStateToProps, mapDispatchToProps)(FlightList));