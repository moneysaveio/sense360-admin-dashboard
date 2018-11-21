import React from 'react';
import {MINI_DRAWER} from "constants/ActionTypes";

const SidenavLogo = ({drawerType}) => {

    const showMini = drawerType.includes(MINI_DRAWER);

    return (
        <div className="sidebar-header d-flex align-items-center">
            {showMini ?
                <div className="mini-logo">
                    <img className="mini-logo-img" alt='...' src='assets/images/360-infra-px.png'/>
                    <img className="mini-logo-img-hover" alt='...' src='assets/images/Sense-360-large.png'/>
                </div> : <img alt='...' src='http://via.placeholder.com/105x36'/>
            }
        </div>
    );
};

export default SidenavLogo;
