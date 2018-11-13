import React from 'react';
import { connect } from 'react-redux';

import Dropzone from 'react-dropzone';

import { postLocationData } from 'actions/Location';

var XLSX = require('xlsx');

class Accept extends React.Component {
    constructor() {
        super();
        this.state = {
            accepted: [],
            rejected: []
        }
    }

    constructAllLocationAddresses (table) {
        const headers = table[0]
        const locations = [];
        table.map((row, rowId) => {
            if (rowId > 0) {
                console.log(rowId, row, row.length, headers.length);
                locations.push(row)
            }
        })
        this.props.postLocationData(locations)
    }

    handleFile(file/*:File*/) {
		/* Boilerplate to set up FileReader */
		const reader = new FileReader();
		const rABS = !!reader.readAsBinaryString;
		reader.onload = (e) => {
			/* Parse data */
			const bstr = e.target.result;
			const wb = XLSX.read(bstr, {type:rABS ? 'binary' : 'array'});
			/* Get first worksheet */
			const wsname = wb.SheetNames[0];
			const ws = wb.Sheets[wsname];
			/* Convert array of arrays */
			const data = XLSX.utils.sheet_to_json(ws, {header:1});
			/* Update state */
            // console.log(data);
            this.constructAllLocationAddresses(data)
		};
		if(rABS) reader.readAsBinaryString(file); else reader.readAsArrayBuffer(file);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.handleFile(this.state.accepted[0])
    }

    render() {
        return (
            <div className="dropzone-card">
                <div className="dropzone">
                    <Dropzone
                        accept="image/jpeg, image/png, application/pdf, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                        onDrop={(accepted, rejected) => {
                            this.setState({accepted, rejected});
                        }}
                    >
                        <p>Try dropping some files here, or click to select files to upload.</p>
                        <p className="mb-0">Only *.jpeg and *.png images will be accepted</p>
                    </Dropzone>
                </div>
                <div className="dropzone-content">
                    <h2>Accepted files</h2>
                    {this.state.accepted.length > 0 && <ul className="upload-file-list">
                        {
                            this.state.accepted.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                        }
                    </ul>
                    }
                    <h2>Rejected files</h2>
                    {this.state.rejected.length > 0 && <ul className="upload-file-list">
                        {
                            this.state.rejected.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                        }
                    </ul>
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({settings}) => {
    const {width} = settings;
    return {width}
};
export default connect(mapStateToProps, {
    postLocationData
})(Accept);
// export default Accept;