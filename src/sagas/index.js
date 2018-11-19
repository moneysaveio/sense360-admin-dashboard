import { all } from 'redux-saga/effects';
import mailSagas from './Mail';
import toDoSagas from './Todo';
import contactSagas from './Contact';
import chatSagas from './Chat';
import authSagas from './Auth';

// custom
import locationSagas from './Location';
import sensorSagas from './Sensor';

export default function* rootSaga (getState) {
    yield all ([
        mailSagas (),
        toDoSagas (),
        contactSagas (),
        chatSagas (),
        authSagas (),
        locationSagas(),
        sensorSagas()
    ]);
}
