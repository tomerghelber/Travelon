import { travelReducer as reducer } from './reducers'
import * as types from './types'

describe('travel reducer', () => {
    it('should do nothing for delete action on unknown travel', () => {
        const expected = {travels: []};
        const actual = reducer(undefined, {type: types.DELETE_TRAVEL, travelSource: {id: "RANDOM", source: undefined}});
        expect(actual).toEqual(expected);
    });

    it('should delete a travel for delete action on known travel', () => {
        const travelSource = {
            id: "RANDOM",
            source: "source"
        };
        const travel = {
            startDate: {
                year: 2019,
                month: 1,
                day: 2
            },
            days: [],
            source: travelSource
        };
        const expected = {travels: []};
        const actual = reducer({travels: [travel]}, {type: types.DELETE_TRAVEL, travelSource: travelSource});
        expect(actual).toEqual(expected);
    });

    it('should handle ADD_TODO', () => {
        const travel = {
            startDate: {
                year: 2019,
                month: 1,
                day: 2
            },
            days: [],
            source: {
                id: "RANDOM",
                source: "source"
            }
        };
        const expected = {
            travels: [travel]
        };
        const actual = reducer({travels: []}, {
            type: types.ADD_TRAVEL,
            travel: travel
        });
        expect(actual).toEqual(expected)
    });

    it('should not add an exiting travel', () => {
        const travelSource = {
            id: "RANDOM",
            source: "source"
        };
        const travel = {
            startDate: {
                year: 2019,
                month: 1,
                day: 2
            },
            days: [],
            source: travelSource
        };
        const travel2 = {
            startDate: {
                year: 2018,
                month: 2,
                day: 3
            },
            days: [],
            source: travelSource
        };
        const expected = {
            travels: [travel2]
        };
        const actual = reducer(expected, {
            type: types.ADD_TRAVEL,
            travel: travel
        });
        expect(actual).toEqual(expected)
    })
});
