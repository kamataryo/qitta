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
  REQUEST_DELETE_CAT,
  SUCCESS_DELETE_CAT,
  FAILURE_DELETE_CAT,
} from 'reducers/actions'
import API from './API'

import { ProfileActionTypes } from 'reducers/profile'
import { CatActionTypes } from 'reducers/cat'
import { GroupActionTypes } from 'reducers/group'

export function* handleRequestUser(): Iterable<Effect> {
  while (true) {
    const action = yield take(REQUEST_USER)
    const { username } = action.payload
    const result = yield call(API.user(username), action)
    if (!result.ng) {
      yield put({ type: SUCCESS_USER, payload: result})
    } else {
      yield put({ type: FAILURE_USER })
    }
  }
}

export function* handleSuccessUser(): Iterable<Effect> {
  while (true) {
    const { payload } = yield take(SUCCESS_USER)
    yield put({ type: ProfileActionTypes.Set, payload })
    yield put({ type: CatActionTypes.Set, payload: payload.cats })
    yield put({ type: GroupActionTypes.Set, payload: payload.groups })
  }
}

export function* handleRequestDeleteCat(): Iterable<Effect> {
  while (true) {
    const action = yield take(REQUEST_DELETE_CAT)
    const { id } = action.payload
    const result = yield call(API.deleteCat(id), action)
    if (!result.ng) {
      yield put({ type: SUCCESS_DELETE_CAT, payload: result})
    } else {
      yield put({ type: FAILURE_DELETE_CAT })
    }
  }
}

export function* handleSuccessDeleteCat(): Iterable<Effect> {
  while (true) {
    const { payload } = yield take(SUCCESS_DELETE_CAT)
    yield put({ type: CatActionTypes.Set, payload: payload.cats })
  }
}

export default function* rootSaga(): Iterable<Effect> {
  yield fork(handleRequestUser)
  yield fork(handleSuccessUser)

  yield fork(handleRequestDeleteCat)
  yield fork(handleSuccessDeleteCat)
}
