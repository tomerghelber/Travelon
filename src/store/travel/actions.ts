import {ADD_TRAVEL, DELETE_TRAVEL, TravelActionTypes, TravelSource} from './types'

// TypeScript infers that this function is returning SendMessageAction
export function createTravel(source: any): TravelActionTypes {
    const now = new Date();
    return {
        type: ADD_TRAVEL,
        travel: {
            startDate: {
                year: now.getFullYear(),
                month: now.getMonth(),
                day: now.getDate(),
            },
            days: [],
            source: {
                id: "demo",
                source: source
            }
        }
    }
}

// TypeScript infers that this function is returning DeleteMessageAction
export function deleteTravel(travelSource: TravelSource): TravelActionTypes {
    return {
        type: DELETE_TRAVEL,
        travelSource: travelSource
    }
}