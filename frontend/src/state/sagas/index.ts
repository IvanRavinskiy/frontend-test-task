import {takeLatest} from 'redux-saga/effects';
import {GET_EVENTS} from '../reducers/history';
import {events} from './events';

export function* rootSaga() {
  yield takeLatest(GET_EVENTS.type, events);
}
