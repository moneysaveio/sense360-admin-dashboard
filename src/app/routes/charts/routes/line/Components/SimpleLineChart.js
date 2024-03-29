import React, {Component} from 'react';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import data from './data';

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

    addToTimeMap(event) {
        var bucketFound = false;
        for (var each in this.state.timeMap) {
            const timeDiff = calculateSeconds(each, event.timestamp);
            console.log(event, this.state.timeMap[each], timeDiff)
            if (timeDiff < 5) {
                this.state.timeMap[each].push(event);
                bucketFound = true;
                break;
            }
        }
        if (!bucketFound) {
            this.state.timeMap[event.timestamp] = [event];
        }
        console.log(this.state.timeMap)
    }

    convertTimeMapToArray() {
        for (var each in this.state.timeMap) {
            const item = this.state.timeMap[each];
            var dataPoint;
            console.log(typeof item.value)
            if (topic.includes('RY_VOLT')) {
                dataPoint = {
                    name: item.readableTime,
                    value: item.value,
                    RY_VOLT: item.value
                }
            } else if (topic.includes('YB_VOLT')) {
                dataPoint = {
                    name: item.readableTime,
                    value: item.value,
                    YB_VOLT: item.value
                }
                data.push( dataPoint )

            } else if (topic.includes('R_CURR')) {
                dataPoint = {
                    name: item.readableTime,
                    value: item.value,
                    R_CURR: item.value
                }
            } else if (topic.includes('KWH')) {
                dataPoint = {
                    name: item.readableTime,
                    value: item.value,
                    KWH: item.value
                }
            }
        }
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
                this.addToTimeMap(item);
                item.readableTime = moment(item.timestamp).fromNow();
                var dataPoint;
                console.log(typeof item.value)
                if (topic.includes('RY_VOLT')) {
                    dataPoint = {
                        name: item.readableTime,
                        value: item.value,
                        RY_VOLT: item.value
                    }
                } else if (topic.includes('YB_VOLT')) {
                    dataPoint = {
                        name: item.readableTime,
                        value: item.value,
                        YB_VOLT: item.value
                    }
                    data.push( dataPoint )

                } else if (topic.includes('R_CURR')) {
                    dataPoint = {
                        name: item.readableTime,
                        value: item.value,
                        R_CURR: item.value
                    }
                } else if (topic.includes('KWH')) {
                    dataPoint = {
                        name: item.readableTime,
                        value: item.value,
                        KWH: item.value
                    }
                }
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
                <XAxis dataKey="name" angle={-45} textAnchor="end" />
                <YAxis domain={[240, 270]} />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="YB_VOLT" stroke="#3367d6" activeDot={{ r: 8 }} />
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