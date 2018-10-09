import { combineReducers } from 'redux'
import weather from './get-weather'
import history from './history'

export default combineReducers({
    weather,
    history
});