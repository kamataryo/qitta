import { fork, call, take, put, Effect } from 'redux-saga/effects'
import { Types as DELETE_CAT_TYPES } from 'reducers/actions/async/cat/delete'
import deleteCat from 'api/cat/delete'
import { CatActionTypes } from 'reducers/cat'

export function* handleRequestDeleteCat(): Iterable<Effect> {
  while (true) {
    const action = yield take(DELETE_CAT_TYPES.REQUEST)
    const { id, owner } = action.payload
    const result = yield call(deleteCat(id, owner), action)
    if (!result.ng) {
      yield put({ type: DELETE_CAT_TYPES.SUCCESS, payload: result})
    } else {
      yield put({ type: DELETE_CAT_TYPES.FAILURE })
    }
  }
}

export function* handleSuccessDeleteCat(): Iterable<Effect> {
  while (true) {
    const { payload } = yield take(DELETE_CAT_TYPES.SUCCESS)
    yield put({ type: CatActionTypes.Set, payload })
  }
}

export default [
  fork(handleRequestDeleteCat),
  fork(handleSuccessDeleteCat),
]
