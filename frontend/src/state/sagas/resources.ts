import {call, put} from 'redux-saga/effects';
import {historyAPI} from '../../utils/creatApi';
import {SUCCESS_RESOURCES} from '../reducers/history';

export function* resources(resource: string, id: string) {
  try {
    const data: any = yield call(historyAPI.resources, resource, id);
    yield put(SUCCESS_RESOURCES(data));
  } catch (err) {
    yield call(console.log, `saga events error: ${err}`);
  }
}
