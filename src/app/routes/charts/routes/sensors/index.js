import React from 'react';
// import SimpleLineChart from './Components/SimpleLineChart';
// import VerticalLineChart from './Components/VerticalLineChart';
// import CustomizedDotLineChart from './Components/CustomizedDotLineChart';
// import LineChartWithReferenceLines from './Components/LineChartWithReferenceLines';
// import DashedLineChart from './Components/DashedLineChart';
// import LineChartWithXAxisPading from './Components/LineChartWithXAxisPading';
// import LineChartConnectNulls from './Components/LineChartConnectNulls';
// import SynchronizedLineChart from './Components/SynchronizedLineChart';
import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader';
import IntlMessages from 'util/IntlMessages';
import EventInfo from './Components/EventInfo';


import VoltageLineChart from './Components/VoltageLineChart';
import CurrentLineChart from './Components/CurrentLineChart';
import PowerFactorLineChart from './Components/PowerFactorLineChart';

// remove later
import {
    cardData,
    cardData1,
    cardData2,
    connections,
    data1,
    expanseData,
    todoData
} from 'app/routes/dashboard/routes/data'

const LineChart = ({ match }) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title={<IntlMessages id="sidebar.chart.sensors" />} match={match} />

            <div className="row">
                <CardBox heading="Voltage Line Chart">
                    <VoltageLineChart />
                </CardBox>
                <CardBox heading="Current Line Chart">
                    <CurrentLineChart />
                </CardBox>
                <CardBox heading="Powerfactor Line Chart">
                    <PowerFactorLineChart />
                </CardBox>
                <EventInfo />
            </div>
        </div>
    );
};

export default LineChart;
