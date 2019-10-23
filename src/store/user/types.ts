import { Action } from 'redux';

export interface UserState {
    loggedIn: boolean,
    id?: string,
    name?: string
}

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';

interface UserLoginAction extends Action<typeof USER_LOGIN> {
    id: string,
    name: string
}

interface UserLogoutAction extends Action<typeof USER_LOGOUT> {
}

export type UserActionTypes = UserLoginAction | UserLogoutAction;
