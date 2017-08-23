import { fork, call, take, put, Effect } from 'redux-saga/effects'
import { Types as AsyncLoginTypes } from '../../reducers/actions/async/login'
import { Types as LoginTypes } from '../../reducers/login/action/types'
import login from 'api/login'
import { Types as AsyncProfileActionTypes } from 'reducers/actions/async/profile/get'
import { CatActionTypes } from 'reducers/cat'
import { GroupActionTypes } from 'reducers/group'
import { ProfileActionTypes } from 'reducers/profile'
import { replace } from 'react-router-redux'

export function* handleRequestLogin(): Iterable<Effect> {
  while (true) {
    const action = yield take(AsyncLoginTypes.REQUEST)
    const { username, password } = action.payload
    const result = yield call(login(username, password))
    if (!result.ng) {
      yield put({ type: AsyncLoginTypes.SUCCESS, payload: { result, username }})
    } else {
      yield put({ type: AsyncLoginTypes.FAILURE })
    }
  }
}

export function* handleSuccessLogin(): Iterable<Effect> {
  while (true) {
    const { payload: { username } } = yield take(AsyncLoginTypes.SUCCESS)
    yield put({ type: AsyncProfileActionTypes.REQUEST, payload: { username } })
    yield put(replace('/'))
  }
}

export function* handleLogout(): Iterable<Effect> {
  while (true) {
    yield take(LoginTypes.Logout)

    yield put({ type: CatActionTypes.Set, payload: [] })
    yield put({ type: GroupActionTypes.Set, payload: [] })
    yield put({ type: ProfileActionTypes.Set, payload: {} })
  }
}

export default [
  fork(handleRequestLogin),
  fork(handleSuccessLogin),

  fork(handleLogout),
]
