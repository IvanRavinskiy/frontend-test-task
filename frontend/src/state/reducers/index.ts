import {combineReducers} from '@reduxjs/toolkit';
import {historyReducer} from './history';

export const rootReducer = combineReducers({
  history: historyReducer,
});
