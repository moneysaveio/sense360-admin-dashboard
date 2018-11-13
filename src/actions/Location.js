import {
    FETCH_ALL_LOCATIONS,
    FETCH_ALL_LOCATIONS_SUCCESS,
    POST_LOCATION_DATA
} from 'constants/ActionTypes';

export const fetchAllLocationsSuccess = (locations) => {
    return {
        type: FETCH_ALL_LOCATIONS_SUCCESS,
        payload: locations
    }
}

export const fetchAllLocations = () => {
    return {
        type: FETCH_ALL_LOCATIONS
    }
}

export const postLocationData = (locations) => {
    console.log("in action", locations)
    return {
        type: POST_LOCATION_DATA,
        payload: locations
    }
}
