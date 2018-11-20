import React, { Component } from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import moment from "moment";


import InfoCard from 'components/InfoCard';

import { fetchRecentSensorData } from 'actions/Sensor';


// remove later
// import {
//     cardData,
//     cardData1,
//     cardData2,
//     connections,
//     data1,
//     expanseData,
//     todoData
// } from 'app/routes/dashboard/routes/data'

class EventInfo extends Component {
    state = {
        title: 0,
        subTitle: "Data events monitored",
        lastReceived: false
    }
    componentDidMount() {
        this.props.fetchRecentSensorData();
    }

    componentDidUpdate(prevProps, prevState) {
        const data = [];
        if (this.props.allSensorData &&
            this.props.allSensorData.length) {
            const calls = this.state.title + this.props.allSensorData.length;

            if (!this.state.lastReceived) {
                this.setState( {
                    title: calls,
                    lastReceived: moment()
                } )                
            } else {
                const now = moment();
                const minutesPassed = this.state.lastReceived.diff(now, 'minutes');
                const isReceivable = minutesPassed > 2;
                if (isReceivable) {
                    this.setState( {
                        title: calls,
                        lastReceived: now
                    } )
                }
            }


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

    const { allSensorData } = sensors;
    console.log(allSensorData)
    return { allSensorData };
};
export default withRouter(connect(mapStateToProps, {
    fetchRecentSensorData
})(EventInfo));

// const EventInfo = ({ match }) => {
//     const cardData = {
//         title: 1500,
//         subTitle: "API calls today"
//     }
//     return (
//             <div className="col-sm-6 col-12">
//                 <InfoCard data={cardData} styleName="bg-secondary"/>
//             </div>
//     );
// };

// export default EventInfo;
