import { Action } from 'redux';

interface UserLoggedOutState {
    loggedIn: boolean,
}

interface UserLoggedInState {
    loggedIn: boolean,
    id: string,
    name: string
}

export type UserState = UserLoggedInState | UserLoggedOutState;

export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';

interface UserLoginAction extends Action<typeof USER_LOGIN> {
    id: string,
    name: string
}

interface UserLogoutAction extends Action<typeof USER_LOGOUT> {
}

export type UserActionTypes = UserLoginAction | UserLogoutAction;
