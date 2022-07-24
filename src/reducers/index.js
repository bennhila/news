import {combineReducers }from 'redux'
import sportReduicer from './sportReduicer'
import worldCrisesReducer from './worldCrisesReducer'
import economieReduicer from './economieReduicer'
export default combineReducers({
    sportReduicer,
    worldCrisesReducer,
    economieReduicer,
})