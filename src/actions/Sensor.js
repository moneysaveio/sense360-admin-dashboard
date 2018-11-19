import {
    FETCH_RECENT_SENSOR_DATA,
    FETCH_RECENT_SENSOR_DATA_SUCCESS
} from 'constants/ActionTypes';

export const fetchRecentSensorData = () => {
    return {
        type: FETCH_RECENT_SENSOR_DATA
    }
}

export const fetchRecentSensorDataSuccess = (sensorData) => {
    return {
        type: FETCH_RECENT_SENSOR_DATA_SUCCESS,
        payload: sensorData
    }
}