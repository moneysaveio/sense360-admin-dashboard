import React from 'react';
import {Badge, Button} from 'reactstrap';


const ButtonWithBadge = () => {
    return (
        <div>
            <h4 className="sub-heading">Primary button with badge</h4>
            <div className="jr-btn-group">
                <Button color="primary" className="jr-btn">
                    Notifications <Badge className="ml-2 mb-0" color="light">4</Badge>
                </Button>
                <Button color="secondary" className="jr-btn ml-3">
                    Cart Items <Badge className="ml-2 py-1 mb-0" color="light rounded-circle">5</Badge>
                </Button>
            </div>
            <h4 className="sub-heading">Link with badge</h4>
            <Button className="jr-btn" color="inherit">
                Messages <Badge className="ml-2 mb-0" color="primary">4</Badge>
            </Button>
        </div>
    );
};


export default (ButtonWithBadge);