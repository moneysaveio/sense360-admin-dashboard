import React from 'react';
import {Button, Card, CardBody, CardImg, CardText, CardTitle,} from 'reactstrap';


function ErrorCard() {
    return (
        <div className="col-md-8">
            <Card>
                <CardImg top width="100%" src="https://cdn.dribbble.com/users/1078347/screenshots/2799566/oops.png"
                         title="Sorry Something went wrong!!!" />
                <CardBody>
                    <CardTitle>
                        Sorry Something went wrong!!!
                    </CardTitle>
                    <CardText>
                        Error catched by error boundary of react 16
                    </CardText>
                    <Button size="sma" outline color="primary">
                        Share
                    </Button>
                    <Button size="sma" outline color="primary">
                        Learn More
                    </Button>
                </CardBody>
            </Card>
        </div>
    );
}

export default ErrorCard;