import { Action } from 'redux';

export interface SystemState {
}

export const UPDATE_SESSION = 'UPDATE_SESSION';

interface UpdateSessionAction extends Action<typeof UPDATE_SESSION> {
    payload: SystemState
}

export type SystemActionTypes = UpdateSessionAction;
