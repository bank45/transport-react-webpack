import React from 'react';
import { ScheduleServiceConsumer } from '../schedule-service-context';

const withScheduleService = () => (Wrapped) => {

    return (props) => {
        return (
            <ScheduleServiceConsumer>
                {
                    (scheduleService) => {
                        return ( <Wrapped {...props}
                            scheduleService={scheduleService}/>);
                    }
                }
            </ScheduleServiceConsumer>
        );
    }
};

export default withScheduleService;
