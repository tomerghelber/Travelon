import { UserState, UserActionTypes, USER_LOGIN } from './types'

const initialState: UserState = {
    loggedIn: false
};

export function userReducer(state = initialState, action: UserActionTypes): UserState {
    switch (action.type) {
        case USER_LOGIN: {
            return {
                ...state,
                id: action.id,
                name: action.id,
            }
        }
        default:
            return state
    }
}
