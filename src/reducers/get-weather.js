import actions from '../constants/action-types';

const initialState = {
    loading: true,
    errorLabel: ''
};

export default function weather(state = initialState, action) {
    switch (action.type) {
        case actions.GET_WEATHER:
            return {...state, loading: action.loading};

        case actions.DISPLAY_ERROR:
            return {...state, errorLabel: action.errorLabel};

        default:
            return state;
    }
};