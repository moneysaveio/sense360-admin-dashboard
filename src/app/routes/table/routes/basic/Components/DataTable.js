import React, {Component} from 'react';
import {Table} from 'reactstrap';
import DataTableCell from './DataTableCell';

import {Route, Switch, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import { fetchAllLocations } from 'actions/Location';

let counter = 0;

function createData(image, name, memberFrom, lastLogin, role, status) {
    counter += 1;
    return {id: counter, image, name, memberFrom, lastLogin, role, status};
}


class DataTable extends Component {
    state = {
        data: [
            createData('http://via.placeholder.com/150x150', 'Frozen yoghurt', 'Member since 2008', 'Last login yesterday', 'Admin', 'active'),
            createData('http://via.placeholder.com/150x150', 'Ice cream sandwich', 'Member since 2007', 'Last login 2 min ago', 'Operator', 'active'),
            createData('http://via.placeholder.com/150x150', 'Eclair', 'Member since 2009', 'Last login 5 days ago', 'Customer', 'active'),
            createData('http://via.placeholder.com/150x150', 'Cupcake', 'Member since 2012', 'Last login 1 month ago', 'Operator', 'closed'),
            createData('http://via.placeholder.com/150x150', 'Gingerbread', 'Member since 2006', 'Last login yesterday', 'Customer', 'active'),
        ],
    };

    componentDidMount() {
        this.props.fetchAllLocations();
    }

    componentDidUpdate(prevProps, prevState) {
        const data = [];
        if (this.props.allLocations &&
            this.props.allLocations.length &&
            prevProps != this.props) {
            console.log(this.props.allLocations)
            this.props.allLocations[0].map((item) => {
                data.push( createData('http://via.placeholder.com/150x150', item['Location Code'], item['Client Name'], item['City'], item['Location Name'], 'active') )
            })
            this.setState( {
                data
            } )
        }
    }
    render() {
        const {data} = this.state;
        console.log("fetch locations data function", this.props.fetchAllLocations)
        return (
            <div className="table-responsive-material">
                <Table className="table-middle fst-td-br-tp-0">
                    <tbody>
                    {data.map(user => {
                        return (
                            <DataTableCell key={user.id} data={user}/>
                        );
                    })}
                    </tbody>
                </Table>
            </div>
        );
    }
}

const mapStateToProps = ({locations}) => {
    const { allLocations } = locations;
    return { allLocations };
};
export default withRouter(connect(mapStateToProps, {
    fetchAllLocations
})(DataTable));
// export default DataTable;