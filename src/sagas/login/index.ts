import { fork, call, take, put, Effect } from 'redux-saga/effects'
import { Types as LoginTypes } from '../../reducers/actions/async/login'
import login from 'api/login'
import { Types as ProfileActionTypes } from 'reducers/actions/async/profile/get'
import { push } from 'react-router-redux'

export function* handleRequestLogin(): Iterable<Effect> {
  while (true) {
    const action = yield take(LoginTypes.REQUEST)
    const { username, password } = action.payload
    const result = yield call(login(username, password))
    if (!result.ng) {
      yield put({ type: LoginTypes.SUCCESS, payload: { result, username }})
    } else {
      yield put({ type: LoginTypes.FAILURE })
    }
  }
}

export function* handleSuccessLogin(): Iterable<Effect> {
  while (true) {
    const { payload: { username } } = yield take(LoginTypes.SUCCESS)
    yield put({ type: ProfileActionTypes.REQUEST, payload: { username } })
    yield put(push('/'))
  }
}

export default [
  fork(handleRequestLogin),
  fork(handleSuccessLogin),
]
