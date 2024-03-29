import React from 'react';
import {Button, Tooltip} from 'reactstrap';

class TooltipItem extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            tooltipOpen: false
        };
    }

    toggle() {
        this.setState({
            tooltipOpen: !this.state.tooltipOpen
        });
    }

    render() {
        return (
            <span>
                     <Button className="mr-4 jr-btn" color="primary" id={'Tooltip-' + this.props.id}>
                        {this.props.item.text}
                    </Button>
                    <Tooltip placement={this.props.item.placement} isOpen={this.state.tooltipOpen}
                             target={'Tooltip-' + this.props.id} toggle={this.toggle}>
                        {this.props.item.text}
                     </Tooltip>
          </span>
        );
    }
}

class PositionedTooltips extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tooltips: [
                {
                    placement: 'top',
                    text: 'Top'
                },
                {
                    placement: 'bottom',
                    text: 'Bottom'
                },
                {
                    placement: 'left',
                    text: 'Left'
                },
                {
                    placement: 'right',
                    text: 'Right'
                }
            ]
        };
    }

    render() {
        return (
            <div>
                {this.state.tooltips.map((tooltip, i) => {
                    return <TooltipItem key={i} item={tooltip} id={i}/>;
                })}
            </div>
        );
    }
}

export default PositionedTooltips;