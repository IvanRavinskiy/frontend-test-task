import {call, put} from 'redux-saga/effects';
import {createAPI} from '../../utils/creatApi';
import {configureData, EventType} from '../../utils/configureData';
import {SUCCESS_EVENTS} from '../reducers/history';

export function* events() {
  try {
    const data: EventType[] = yield call(createAPI);
    const dataConfigured: EventType[] = yield call(configureData, data);
    yield put(SUCCESS_EVENTS(dataConfigured));
  } catch (err) {
    yield call(console.log, `saga events error: ${err}`);
  }
}
