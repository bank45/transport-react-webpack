import React, { Component } from 'react';
import { connect } from 'react-redux';
import { allStationLoaded, flightsError, setStation } from '../../actions';

class FormTop extends Component {

    state = {
        arrival: '',
        from: '',
        liveFind: [],
        station: ''
    }

    handleChangeArrival = (event) => {
        console.log(event.target.value)
        this.setState({ arrival: event.target.value })
    }

    findStation = async () => {
        const { trans_type } = this.props
        const items = this.props.allstation
        const str = new RegExp(this.state.from, 'i')
        const lf = {}
        if (this.state.from.length > 2) {
            for (let s in items) {
                if (str.test(items[s][3]) && items[s][4] === trans_type) {
                    lf[s] = [items[s][3], items[s][4]]
                }
            }
            await this.setState({
                liveFind: lf
            })
            console.log(this.state.liveFind)
        }
        console.log('findStation: ...OK')
    }

    handleChangeFrom = async (event) => {
        const { setStation } = this.props
        //    const allStat = this.props.allstation
        await this.setState({ from: event.target.value })

        await this.findStation()
        //  setStation()
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
                                <input className="form-control " id="start" required type="date" name="datestart" value={this.state.arrival} onChange={this.handleChangeArrival} />
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
                        <option selected>

                        </option>
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

const mapStateToProps = ({ station, allstation, flights, error }) => {
    return { station, allstation, flights, error }
}

const mapDispatchToProps = {
    allStationLoaded,
    flightsError,
    setStation
}

export default connect(mapStateToProps, mapDispatchToProps)(FormTop);