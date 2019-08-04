import React, { Component } from 'react';

class FormTop extends Component {
    render() {
        return (
            <div className='block'>
                <form action="#" className='form-horizontal'>
                    <div className="form-group row">
                        <label className="col-md-3 control-label" for="text">Date arrival</label>
                        <div className='col-md-9'>
                            <div className='input-group'>
                                <div className='input-group-text'><span>Date arrival</span></div>
                                <input className="form-control " id="start" type="date" name="date-start" />
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 control-label" for="text">Date depart</label>
                        <input className="form-control col-lg-6" id="end" type="date" name="date-end" />
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 control-label" for="text">Station from</label>
                        <input className="form-control col-lg-6" id="from" type="text" name="station-from" />
                    </div>
                    <div className="form-group row">
                        <label className="col-md-3 control-label" for="text">Station to</label>
                        <input className="form-control col-lg-6" id="to" type="text" name="station-to" />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-info btn-xs">Расписание</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default FormTop;