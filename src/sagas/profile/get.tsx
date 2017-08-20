import { fork, call, take, put, Effect } from 'redux-saga/effects'
import { ProfileActionTypes } from 'reducers/profile'
import { GroupActionTypes } from 'reducers/group'
import { CatActionTypes } from 'reducers/cat'
import { Types as GET_PROFILE_TYPES } from 'reducers/actions/async/profile/get'
import getProfile from 'api/profile/get'

export function* handleRequestGetProfile(): Iterable<Effect> {
  while (true) {
    const action = yield take(GET_PROFILE_TYPES.REQUEST)
    const { username } = action.payload
    const result = yield call(getProfile(username), action)
    if (!result.ng) {
      yield put({ type: GET_PROFILE_TYPES.SUCCESS, payload: result})
    } else {
      yield put({ type: GET_PROFILE_TYPES.FAILURE })
    }
  }
}

export function* handleSuccessGetProfile(): Iterable<Effect> {
  while (true) {
    const { payload } = yield take(GET_PROFILE_TYPES.SUCCESS)
    yield put({ type: ProfileActionTypes.Set, payload })
    yield put({ type: CatActionTypes.Set, payload: payload.cats })
    yield put({ type: GroupActionTypes.Set, payload: payload.groups })
  }
}

export default [
  fork(handleRequestGetProfile),
  fork(handleSuccessGetProfile),
]
