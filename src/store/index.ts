import { combineReducers, createStore } from 'redux';
import { travelReducer } from './travel/reducers';
import { systemReducer } from './system/reducers';

const rootReducer = combineReducers({
    travelReducer,
    systemReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
