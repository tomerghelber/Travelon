import { combineReducers, createStore } from 'redux';
import { travelReducer } from './travel/reducers';
import { userReducer } from './user/reducers';

const rootReducer = combineReducers({
    travelReducer,
    userReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
