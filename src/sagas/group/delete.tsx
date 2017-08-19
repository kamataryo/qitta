import { call, take, put, Effect } from 'redux-saga/effects'
import { Types as DELETE_GROUP_TYPES } from 'reducers/actions/async/group/delete'
import APIdeleteGroup from 'api/group/delete'
import { GroupActionTypes } from 'reducers/group'

export function* handleRequestDeleteGroup(): Iterable<Effect> {
  while (true) {
    const action = yield take(DELETE_GROUP_TYPES.REQUEST)
    const { username, groupname } = action.payload
    const result = yield call(APIdeleteGroup(username, groupname), action)
    if (!result.ng) {
      yield put({ type: DELETE_GROUP_TYPES.SUCCESS, payload: result})
    } else {
      yield put({ type: DELETE_GROUP_TYPES.FAILURE })
    }
  }
}

export function* handleSuccessDeleteGroup(): Iterable<Effect> {
  while (true) {
    const { payload } = yield take(DELETE_GROUP_TYPES.SUCCESS)
    yield put({ type: GroupActionTypes.Set, payload })
  }
}
