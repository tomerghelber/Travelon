import { Action } from 'redux';

export interface TimeOnly {
    hour: number,
    minutes: number
}

interface Event {
    startTime: TimeOnly,
    endTime: TimeOnly,
    description?: string,
}

export type Place = any

export interface VisitingEvent extends Event {
    place: Place
}

export interface TransportationEvent extends Event {
    startPlace: Place,
    endPlace: Place,
}

export interface Day {
    events: Event[]
}

export interface DateOnly {
    year: number,
    month: number,
    day: number,
}


export interface TravelSource {
    id: string,
    source: any
}

export interface Travel {
    startDate: DateOnly,
    description?: string,
    days: Day[],
    source: TravelSource
}

export interface TravelsState {
    travels: Travel[]
}

export const ADD_TRAVEL = 'ADD_TRAVEL';
export const DELETE_TRAVEL = 'DELETE_TRAVEL';

interface CreateTravelAction extends Action<typeof ADD_TRAVEL> {
    travel: Travel
}

interface DeleteTravelAction extends Action<typeof DELETE_TRAVEL> {
    travelSource: TravelSource
}

export type TravelActionTypes = CreateTravelAction | DeleteTravelAction;
