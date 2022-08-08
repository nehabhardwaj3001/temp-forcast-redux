import * as types from "./action";
import { weatherData } from './mock.js';

const initialState = { weatherData };

 const tempReducer = (state= initialState, action) => {
    switch(action.type) {
        case types.FETCH_TEMP_SUCCESS : 
        return{
            ...state,
        };

        case types.INC_TEMP_SUCCESS : 
        let data =state.weatherData.map((item, i) => item.day === action.data ? {...item, temp: item.temp + 0.2 } : item)
        return{
            ...state,
            weatherData : data
        };

        case types.DEC_TEMP_SUCCESS : 
        let decData =state.weatherData.map((item, i) => item.day === action.data ? {...item, temp: item.temp - 0.3 } : item)
        console.log("decData", decData, action)
        return{
            ...state,
            weatherData : decData
        };
        
        default:
            return state;
    }
}

export default tempReducer;