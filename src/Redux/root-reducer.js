import { combineReducers } from "redux";
import tempReducer from "./reducer";

const rootReducer = combineReducers({
    data: tempReducer
})

export default rootReducer;