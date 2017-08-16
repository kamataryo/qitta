import {
  call,
  take,
  // put,
  fork,
  Effect,
} from 'redux-saga/effects'
import {
  REQUEST_USER,
} from 'reducers/actions'
import API from './API'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
// function* fetchUser(action: any) {
//    try {
//       const user = call(Api.fetchUser, action.payload.userId)
//       yield user
//       yield put({ type: 'USER_FETCH_SUCCEEDED', user })
//    } catch (e) {
//       yield put({ type: 'USER_FETCH_FAILED', message: e.message })
//    }
// }
//
// /*
//   Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
//   Allows concurrent fetches of user.
// */
// function* mySaga(): Iterator<any> {
//   yield takeEvery('USER_FETCH_REQUESTED', fetchUser)
// }
//
// export default mySaga

export function* handleRequestUser(): Iterable<Effect> {
  while (true) {
    const action = yield take(REQUEST_USER)
    const { username } = action.payload
    const result = yield call(API.user(username), action)
    if (!result.ng) {
      alert('success')
      // yield put(successUser(payload))
    } else {
      alert('failure')
      // yield put(failureUser(error))
    }
  }
}

export default function* rootSaga(): Iterable<Effect> {
  yield fork(handleRequestUser)

}
