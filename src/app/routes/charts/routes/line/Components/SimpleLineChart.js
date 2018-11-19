import React, {Component} from 'react';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import data from './data';

import {Route, Switch, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import { fetchRecentSensorData } from 'actions/Sensor';
import RTChart from 'react-rt-chart';


class SimpleLineChart extends Component {
    state = {
        data: [],
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
                const topic = item.topic;
                item.readableTime = item.timestamp.split(' ')[0];
                var dataPoint;
                if (topic.includes('RY_VOLT')) {
                    dataPoint = {
                        name: item.readableTime,
                        value: item.value,
                        'RY_VOLT': item.value
                    }
                } else if (topic.includes('YB_VOLT')) {
                    dataPoint = {
                        name: item.readableTime,
                        value: item.value,
                        'YB_VOLT': item.value
                    }
                } else if (topic.includes('R_CURR')) {
                    dataPoint = {
                        name: item.readableTime,
                        value: item.value,
                        'R_CURR': item.value
                    }
                } else if (topic.includes('KWH')) {
                    dataPoint = {
                        name: item.readableTime,
                        value: item.value,
                        'KWH': item.value
                    }
                }
                data.push( dataPoint )
            })
            this.setState( {
                data,
                inProgress: false
            } )
        }
    }

    render() {
        return (
        // <ResponsiveContainer width="100%" height={200}>
        //     <LineChart data={this.state.data}
        //                margin={{ top: 10, right: 0, left: - 25, bottom: 0 }}>
        //         <XAxis dataKey="name" angle={-45} textAnchor="end" />
        //         <YAxis domain={[243, 246]} />
        //         <CartesianGrid strokeDasharray="3 3" />
        //         <Tooltip />
        //         <Legend />
        //         <Line type="monotone" dataKey="RY_VOLT" stroke="#3367d6" activeDot={{ r: 8 }} />
        //         <Line type="monotone" dataKey="YB_VOLT" stroke="#ffc658" />
        //     </LineChart>
        // </ResponsiveContainer>
        <ResponsiveContainer width="100%" height={200}>
            <RTChart
                fields={['RY_VOLT','YB_VOLT']}
                data={data} />
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