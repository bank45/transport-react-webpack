import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withScheduleService } from '../hoc';
import { scheduleLoaded, flightsError } from '../../actions';
import ErrorIndicator from '../error-indicator';



import FormTop from '../form-top';

class Header extends Component {
    state = {
        datestart: Date.now(),
        transport_types: 'plane'
    }
    componentDidMount() {
        console.log('Header: > componentDidMount: ', 'Date.now()', Date.now())

    }

    componentDidUpdate() {
        console.log('Header componentDidUpdate()...')
    }
    handleClick = (e) => {
        e.preventDefault();
        console.log('e: ', e.target.id)
        this.setState({
            transport_types: e.target.id
        })

        // Смена активной вкладки
        const activeElement = document.querySelector('.nav-link.active')
        activeElement.classList.remove('active')
        const newActiveElement = document.querySelector(`#${e.target.id}`)
        newActiveElement.classList.add('active')
        // Поиск станции



    }
    onListFlights = async (event) => {
        event.preventDefault()
        console.log('onListFlights:..', 'event:', event.target)
        const formData = new FormData(event.target);
        const obj = {
            transport_types: this.state.transport_types,
            
        };
        formData.forEach((value, key) => {
            obj[key] = value
        })
        console.log('obj', obj)
        const { scheduleService, scheduleLoaded, flightsError } = this.props;

        const dataFlights = scheduleService.getSchedule(obj);

        await dataFlights
            .then(res => {
                scheduleLoaded(res)
            })
            .catch((err) => flightsError(err));
    }
    render() {
        const { error } = this.props;
        const{transport_types}=this.state
        console.log('Header Render:..')
        if (error) {
            return <ErrorIndicator />
        }
        return (
            <div class="card text-center">
                <div class="card-header">
                    <ul class="nav nav-tabs card-header-tabs">
                        <li class="nav-item">
                            <a id='plane' class="nav-link active" onClick={this.handleClick} href="#">Авиа</a>
                        </li>
                        <li class="nav-item">
                            <a id='train' class="nav-link " onClick={this.handleClick} href="#">ЖД</a>
                        </li>
                        <li class="nav-item">
                            <a id='water' class="nav-link" onClick={this.handleClick} href="#">Водный</a>
                        </li>
                        <li class="nav-item">
                            <a id='bus' class="nav-link" onClick={this.handleClick} href="#">Автобус</a>
                        </li>
                        <li class="nav-item">
                            <a id='suburban' class="nav-link" onClick={this.handleClick} href="#">Электричка</a>
                        </li>
                        <li class="nav-item">
                            <a id='helicopter' class="nav-link" onClick={this.handleClick} href="#">Вертолет</a>
                        </li>
                    </ul>
                </div>
                <div class="card-body">
                    <FormTop onListFlights={this.onListFlights} trans_type={transport_types} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ allstation, flights, error }) => {
    return { allstation, flights, error }
}

const mapDispatchToProps = {
    scheduleLoaded,
    flightsError
}

export default withScheduleService()(
    connect(mapStateToProps, mapDispatchToProps)(Header));