import { fork, call, take, put, Effect } from 'redux-saga/effects'
import { Types as POST_CAT_TYPES } from 'reducers/actions/async/cat/post'
import postCat from 'api/cat/post'
import { CatActionTypes } from 'reducers/cat'

export function* handleRequestPostCat(): Iterable<Effect> {
  while (true) {
    const action = yield take(POST_CAT_TYPES.REQUEST)
    const { username, catname } = action.payload
    const result = yield call(postCat(username, catname), action)
    if (!result.ng) {
      yield put({ type: POST_CAT_TYPES.SUCCESS, payload: result})
    } else {
      yield put({ type: POST_CAT_TYPES.FAILURE })
    }
  }
}

/**
 * handle successe of post cat request
 * @returns dispatch to set new cat state
 */
export function* handleSuccessPostCat(): Iterable<Effect> {
  while (true) {
    const { payload } = yield take(POST_CAT_TYPES.SUCCESS)
    yield put({ type: CatActionTypes.Set, payload })
  }
}

export default [
  fork(handleRequestPostCat),
  fork(handleSuccessPostCat),
]
