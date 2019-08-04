import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './component/app'
import ErrorBoundry from './component/error-boundry';
import ScheduleService from './services/schedule-service';
import { ScheduleServiceProvider } from './component/schedule-service-context';

import store from './store';

const scheduleService = new ScheduleService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <ScheduleServiceProvider value={scheduleService}>
                    <App />
            </ScheduleServiceProvider>
        </ErrorBoundry>
    </Provider>, 
    document.querySelector('#root'));