import actions from '../constants/action-types';

export default function history(state = [], action) {
    switch (action.type) {
        case actions.ADD_TO_HISTORY:
            return [
                ...state,
                {
                    city: action.data.name,
                    temp: action.data.main.temp
                }
            ];

        case actions.REMOVE_FROM_HISTORY:
            return [...state.splice(0, 1)];

        default:
            return state;
    }
};