import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import Settings from './Settings';
import ChatData from './Chat';
import Contact from './Contact';
import Mail from './Mail';
import ToDo from './ToDo';
import Auth from './Auth';
import Location from './Location';
import Sensor from './Sensor';

const reducers = combineReducers ({
    routing: routerReducer,
    settings: Settings,
    chatData: ChatData,
    contacts: Contact,
    mail: Mail,
    toDo: ToDo,
    auth: Auth,
    locations: Location,
    sensors: Sensor
});

export default reducers;
