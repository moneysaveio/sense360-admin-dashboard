import React, {Component} from 'react';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
// import data from './data';

import {Route, Switch, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import { fetchRecentSensorData } from 'actions/Sensor';
import RTChart from 'react-rt-chart';
import moment from "moment";

// moment functions to calluculate time intervals between events
function calculateDays(startDate, endDate)
{
   var start_date = moment(startDate, 'YYYY-MM-DD HH:mm:ss');
   var end_date = moment(endDate, 'YYYY-MM-DD HH:mm:ss');
   var duration = moment.duration(end_date.diff(start_date));
   var days = duration.asDays();       
   return days;
}

function getMoment(dateString) {
    var dateObj = new Date(dateString);
    var momentObj = moment(dateObj);
    var momentString = momentObj.format('YYYY-MM-DD HH:mm:ss');
    return momentObj
}

function calculateSeconds(startDate, endDate)
{
   var start_date = getMoment(startDate)
   var end_date = getMoment(endDate);

   var seconds = end_date.diff(start_date, 'seconds');
   console.log(start_date, end_date, seconds)
   return seconds;
}

class SimpleLineChart extends Component {
    state = {
        data: [],
        timeMap: {},
        inProgress: false
    }

    componentDidMount() {
        this.setState({
            inProgress: true
        })
        this.props.fetchRecentSensorData();

        const intervalId = setInterval(() => {
            this.props.fetchRecentSensorData();
            this.setState({
                inProgress: true
            })
        }, 60000)
    }

    componentDidUpdate(prevProps, prevState) {
        const data = [];
        if (this.props.allSensorData &&
            this.props.allSensorData.length &&
            prevProps != this.props &&
            this.state.inProgress) {
            this.props.allSensorData.map((item) => {
                data.push( item )
            })
            this.setState( {
                data,
                inProgress: false
            } )
        }
    }

    render() {
        return (
        <ResponsiveContainer width="100%" height={200}>
            <LineChart data={this.state.data}
                       margin={{ top: 10, right: 0, left: - 25, bottom: 0 }}>
                <XAxis dataKey="timestamp" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="R_PF" stroke="#FF0000"  />
                <Line type="monotone" dataKey="Y_PF" stroke="#B1B200"  />
                <Line type="monotone" dataKey="B_PF" stroke="#3367d6"  />

            </LineChart>
        </ResponsiveContainer>
        );
    }
};

const mapStateToProps = ({ sensors }) => {
    const { allSensorData, voltageData } = sensors;
    return { allSensorData, voltageData };
};
export default withRouter(connect(mapStateToProps, {
    fetchRecentSensorData
})(SimpleLineChart));

// export default SimpleLineChart