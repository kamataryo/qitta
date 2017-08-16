import {
  call,
  take,
  put,
  fork,
  Effect,
} from 'redux-saga/effects'
import {
  REQUEST_USER,
  SUCCESS_USER,
  FAILURE_USER,
} from 'reducers/actions'
import API from './API'

import { ProfileActionTypes } from 'reducers/profile'

export function* handleSuccessUser(): Iterable<Effect> {
  while (true) {
    const { payload } = yield take(SUCCESS_USER)
    yield put({ type: ProfileActionTypes.setProfile, payload })
    yield put({ type: '' }) // TODO: put set Cats action here
    yield put({ type: '' }) // TODO: put set Groups action here
  }
}

export function* handleRequestUser(): Iterable<Effect> {
  while (true) {
    const action = yield take(REQUEST_USER)
    const { username } = action.payload
    const result = yield call(API.user(username), action)
    if (!result.ng) {
      // console.log('success')
      yield put({ type: SUCCESS_USER, payload: result})
    } else {
      yield put({ type: FAILURE_USER })
    }
  }
}

export default function* rootSaga(): Iterable<Effect> {
  yield fork(handleRequestUser)
  yield fork(handleSuccessUser)

}
