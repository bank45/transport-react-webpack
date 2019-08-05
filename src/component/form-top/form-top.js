import React, { Component } from 'react';

class FormTop extends Component {
    constructor() {
        super()
        this.state = {
            arrival: '',
            from: 'Moscow'
        }
        this.handleChangeArrival = this.handleChangeArrival.bind(this)
        this.handleChangeFrom = this.handleChangeFrom.bind(this)
    }

    handleChangeArrival(event) {
        console.log(event.target.value)
        this.setState({ arrival: event.target.value })
    }

    handleChangeFrom(event) {
     //   console.log(event.target.value)
        this.setState({ from: event.target.value })
    }
    render() {
        console.log('FormTop render: ...')
        const { onListFlights } = this.props;
        return (
            <div className='block'>
                <form onSubmit={onListFlights} className='form-horizontal'>
                    <div className="form-group row">
                        <label className="col-md-3 control-label" for="text">Date arrival</label>
                        <div className='col-md-9'>
                            <div className='input-group'>
                                <div className='input-group-text'><span>Date arrival</span></div>
                                <input className="form-control " id="start" type="date" name="date-start" value={this.state.arrival} onChange={this.handleChangeArrival}/>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 control-label" for="text">Date depart</label>
                        <input className="form-control col-lg-6" id="end" type="date" name="date-end" />
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 control-label" for="text">Station from</label>
                        <input className="form-control col-lg-6" id="from" type="text" name="station-from" value={this.state.from} onChange={this.handleChangeFrom} />
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 control-label" for="text">Station to</label>
                        <input className="form-control col-lg-6" id="to" type="text" name="station-to" value='' />
                    </div>
                    <div className="form-group">
                        <button type='submit' className="btn btn-info btn-xs">Расписание</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default FormTop;