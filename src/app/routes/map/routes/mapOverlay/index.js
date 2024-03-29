import React from 'react';
import MapOverlay from './Components/MapOverlay';
import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader';
import IntlMessages from 'util/IntlMessages';


const Overlay = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title={<IntlMessages id="sidebar.map.overlay"/>} match={match}/>

            <div className="row">
                <CardBox styleName="col-lg-12">
                    <MapOverlay/>
                </CardBox>
            </div>
        </div>
    );
};

export default Overlay;
