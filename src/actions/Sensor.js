import {
    FETCH_RECENT_SENSOR_DATA,
    FETCH_RECENT_SENSOR_DATA_SUCCESS,
    FETCH_ALL_SENSOR_DATA_COUNT,
    FETCH_ALL_SENSOR_DATA_COUNT_SUCCESS
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

export const fetchAllSensorDataCount = () => {
    return {
        type: FETCH_ALL_SENSOR_DATA_COUNT
    }
}

export const fetchAllSensorDataCountSuccess = (dataCount) => {
    return {
        type: FETCH_ALL_SENSOR_DATA_COUNT_SUCCESS,
        payload: dataCount
    }
}
