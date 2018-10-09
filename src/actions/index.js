import actions from '../constants/action-types';
import {API_KEY} from '../constants/api';

function addToHistory(data) {
    return {
        type: actions.ADD_TO_HISTORY,
        data: data
    };
}

function removeFromHistory() {
    return {
        type: actions.REMOVE_FROM_HISTORY,
    };
}

function displayLoader(loading) {
    return {
        type: actions.DISPLAY_LOADER,
        loading: loading
    };
}

function displayError(errorText) {
    return {
        type: actions.DISPLAY_ERROR,
        errorLabel: errorText
    };
}

export const getWeather = (city) => dispatch => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        .then((response) => {
            if (response.status === 200) return response.json();

            dispatch({type: actions.DISPLAY_ERROR, errorLabel: `API ERROR CODE: ${response.status}`});
        })
        .then((weather) => {
            dispatch({type: actions.FETCH_WEATHER_SUCCESS, currentWeather: weather});
            dispatch({type: actions.ADD_TO_HISTORY, data: weather});
            dispatch({type: actions.DISPLAY_LOADER, loading: false});
        })
        .catch(() => {
            dispatch({type: actions.DISPLAY_ERROR, errorLabel: 'API ERROR'})
        });
};

export {displayLoader, displayError, addToHistory, removeFromHistory};