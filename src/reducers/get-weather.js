import actions from '../constants/action-types';

const initialState = {
    loading: true,
    errorLabel: '',
    currentWeather: null,
    weatherType: ''
};

export default function weather(state = initialState, action) {
    switch (action.type) {
        case actions.DISPLAY_LOADER:
            return {...state, loading: action.loading};

        case actions.SET_WEATHER:
            return {...state, weatherType: action.weatherType};

        case actions.DISPLAY_ERROR:
            return {...state, errorLabel: action.errorLabel};

        case actions.FETCH_WEATHER_SUCCESS:
            return {...state, currentWeather: action.currentWeather};

        default:
            return state;
    }
};