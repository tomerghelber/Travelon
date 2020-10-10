import {ADD_TRAVEL, DELETE_TRAVEL, TravelActionTypes, TravelsState} from './types'

const initialState: TravelsState = {
    travels: []
};

export function travelReducer(state = initialState, action: TravelActionTypes): TravelsState {
    switch (action.type) {
        case ADD_TRAVEL:
            if (state.travels.find(travel => travel.source === action.travel.source)) {
                return state;
            } else {
                return {
                    travels: [...state.travels, action.travel]
                };
            }
        case DELETE_TRAVEL:
            return {
                travels: state.travels.filter(travel => travel.source !== action.travelSource)
            };
        default:
            return state;
    }
}
