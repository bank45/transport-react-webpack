import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withScheduleService } from '../hoc';
import { scheduleLoaded, flightsError } from '../../actions';
import ErrorIndicator from '../error-indicator';



import FormTop from '../form-top';

class Header extends Component {

    componentDidUpdate() {
        console.log('Header componentDidUpdate()...')
    }

    async onListFlights(event) {
        console.log('onListFlights:..', 'event:', event.target)
        event.preventDefault()
        const { scheduleService, scheduleLoaded, flightsError } = this.props;

        const dataFlights = scheduleService.getSchedule();

        await dataFlights
            .then(res => {
                scheduleLoaded(res)
            })
            .catch((err) => flightsError(err));
    }
    render() {
        const {  error } = this.props;
        console.log('Header Render:..')
        if (error) {
            return <ErrorIndicator />
        }
        return (
                <div class="card text-center">
                    <div class="card-header">
                        <ul class="nav nav-tabs card-header-tabs">
                            <li class="nav-item">
                                <a class="nav-link " href="#">Авиа</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">ЖД</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Водный</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Авто</a>
                            </li>
                        </ul>
                    </div>
                    <div class="card-body">
                        <FormTop onListFlights={this.onListFlights} />
                    </div>
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
    connect(mapStateToProps, mapDispatchToProps)(Header));