import {ADD_TRAVEL, DELETE_TRAVEL, TravelActionTypes, TravelsState} from './types'

const initialState: TravelsState = {
    travels: []
};

export function travelReducer(state = initialState, action: TravelActionTypes): TravelsState {
    switch (action.type) {
        case ADD_TRAVEL:
            return {
                travels: [...state.travels, action.travel]
            };
        case DELETE_TRAVEL:
            return {
                travels: state.travels.filter(travel => travel.source !== action.travelSource)
            };
        default:
            return state;
    }
}
