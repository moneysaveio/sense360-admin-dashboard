import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import asyncComponent from '../../../util/asyncComponent';


const SensorEvents = ({ match }) => (
    <div className="app-wrapper">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/real-time-data`} />
            <Route path={`${match.url}/real-time-data`} component={asyncComponent (() => import('./routes/realTimeData'))} />
            <Route
                component={asyncComponent(() => import('app/routes/extraPages/routes/404'))}/>
        </Switch>
    </div>
);

export default SensorEvents;
