import React from 'react';
import CardBox from 'components/CardBox/index';
import IntlMessages from 'util/IntlMessages';
import ReactTable from "react-table";
import matchSorter from 'match-sorter';
import { sensorEventData } from '../../data';
import "react-table/react-table.css";


const RealTimeData = ({data=sensorEventData}) => {

    console.log("data: ", data);
    let newData = data.map((d)=>{
        d.children = data;
        return d
    });
    
    // data = [...newData];

    return(
        <div>
            <CardBox styleName="col-12" cardStyle="p-0 border-0" heading={<IntlMessages id="sensorEvents.realTimeData"/>}
                     headerOutside>
                <ReactTable
                    data={data}
                    filterable
                    defaultFilterMethod={(filter, row) =>{
                        console.log('filter', filter);
                        console.log('row', row)
                        return String(row[filter.id]) === filter.value}
                    }
                    columns={[
                        {
                            Header: "Sensor Id",
                            id: "sensorId",
                            accessor: d => {
                                console.log("d: ", d);
                                return d.sensorId
                            },
                            filterMethod: (filter, rows) =>{
                                console.log("filter: ", filter);
                                console.log("rows: ", rows);
                                return matchSorter(rows, filter.value, {keys: ["sensorId"]});
                                // row[filter.id].startsWith(filter.value) &&
                                // row[filter.id].endsWith(filter.value)
                            },
                            filterAll: true
                        },
                        {
                            Header: "Timestamp",
                            id: "timestamp",
                            accessor: d => d.dataPacket.timestamp,
                            filterMethod: (filter, rows) =>
                                matchSorter(rows, filter.value, {keys: ["timestamp"]}),
                            filterAll: true
                        },
                        {
                            Header: "Actual Current",
                            id: "actualCurrent",
                            accessor: d => d.dataPacket.actualCurrent,
                            filterMethod: (filter, rows) =>
                                matchSorter(rows, filter.value, {keys: ["actualCurrent"]}),
                            filterAll: true
                        },
                        {
                            Header: "Temprature",
                            id: "temprature",
                            accessor: d => d.dataPacket.temprature,
                            filterMethod: (filter, rows) =>
                                matchSorter(rows, filter.value, {keys: ["temprature"]}),
                            filterAll: true
                        },
                        {
                            Header: "Humidity",
                            id: "humidity",
                            accessor: d => d.dataPacket.humidity,
                            filterMethod: (filter, rows) =>
                                matchSorter(rows, filter.value, {keys: ["humidity"]}),
                            filterAll: true
                        },
                        {
                            Header: "Compressor Status",
                            id: "compressorStatus",
                            accessor: d => d.dataPacket.compressorStatus,
                            filterMethod: (filter, rows) =>
                                matchSorter(rows, filter.value, {keys: ["compressorStatus"]}),
                            filterAll: true
                        },
                        {
                            Header: "Overload Current",
                            id: "overloadCurrent",
                            accessor: d => d.dataPacket.overloadCurrent,
                            filterMethod: (filter, rows) =>
                                matchSorter(rows, filter.value, {keys: ["overloadCurrent"]}),
                            filterAll: true
                        },
                        
                        
                    ]}
                    defaultPageSize={10}
                    className="-striped -highlight"
                />
            </CardBox>
        </div>
    );
}



export default RealTimeData;
