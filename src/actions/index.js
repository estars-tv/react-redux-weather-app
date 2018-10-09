import actions from '../constants/action-types';

function getWeather(city) {
    return {
        type: actions.GET_WEATHER,
        city: city
    };
}

function displayError(errorText) {
    return {
        type: actions.DISPLAY_ERROR,
        errorLabel: errorText
    };
}

export {getWeather, displayError};