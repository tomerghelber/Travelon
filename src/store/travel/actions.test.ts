import * as actions from './actions';
import * as types from './types';

describe('actions', () => {
    it('should create an action to delete a travel', () => {
        const travelSource: types.TravelSource = {
            id: "id",
            source: "source"
        };
        const expectedAction = {
            type: types.DELETE_TRAVEL,
            travelSource
        };
        expect(actions.deleteTravel(travelSource)).toEqual(expectedAction)
    });
});
