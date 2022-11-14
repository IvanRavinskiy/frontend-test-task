import {call, put} from 'redux-saga/effects';
import {historyAPI} from '../../utils/creatApi';
import {configureData, EventType} from '../../utils/configureData';
import {SUCCESS_EVENTS} from '../reducers/history';
import {resources} from './resources';

export function* events() {
  try {
    const data: EventType[] = yield call(historyAPI.events);
    const dataConfigured: EventType[] = yield call(configureData, data);
    yield call(resources, 'MedicationStatement', '62419b28ed9297df29944596');
    yield put(SUCCESS_EVENTS(dataConfigured));
  } catch (err) {
    yield call(console.log, `saga events error: ${err}`);
  }
}
