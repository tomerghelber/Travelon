import {UserState, USER_LOGIN, UserActionTypes, USER_LOGOUT} from './types'

export function userLoggedIn(newSession: UserState): UserActionTypes {
    if (newSession.id && newSession.name) {
        return {
            type: USER_LOGIN,
            id: newSession.id,
            name: newSession.name,
        }
    } else {
        return {
            type: USER_LOGOUT,
        }
    }
}
