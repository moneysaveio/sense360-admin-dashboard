import React, { Component } from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import moment from "moment";


import InfoCard from 'components/InfoCard';

import { fetchAllSensorDataCount } from 'actions/Sensor';

class EventInfo extends Component {
    state = {
        title: 0,
        subTitle: "Data events monitored",
        lastReceived: false
    }

    componentDidMount() {
        this.props.fetchAllSensorDataCount();
        const intervalId = setInterval(() => {
            this.props.fetchAllSensorDataCount();
        }, 10000)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps != this.props) {
            this.setState({
                title: this.props.allSensorDataCount
            })
        }
    }

    render() {
        return (
            <div className="col-sm-6 col-12">
                <InfoCard data={this.state} styleName="bg-secondary"/>
            </div>
        );
    }
}
const mapStateToProps = ({ sensors }) => {
    const { allSensorDataCount } = sensors;
    return { allSensorDataCount };
};
export default withRouter(connect(mapStateToProps, {
    fetchAllSensorDataCount
})(EventInfo));
