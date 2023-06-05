import { combineReducers } from "redux";
import color from './modules/color.js';
import count from './modules/count.js';
import animal from './modules/animal.js';

export default combineReducers({
    color, // color : color
    count, // count: count
    animal // animal: animal
})