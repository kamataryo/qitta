import { call, take, put, Effect } from 'redux-saga/effects'
import { Types as POST_GROUP_TYPES } from 'reducers/actions/async/group/post'
import postGroup from 'api/group/post'
import { GroupActionTypes } from 'reducers/group'

export function* handleRequestPostGroup(): Iterable<Effect> {
  while (true) {
    const action = yield take(POST_GROUP_TYPES.REQUEST)
    const { username, groupname } = action.payload
    const result = yield call(postGroup(username, groupname), action)
    if (!result.ng) {
      yield put({ type: POST_GROUP_TYPES.SUCCESS, payload: result})
    } else {
      yield put({ type: POST_GROUP_TYPES.FAILURE })
    }
  }
}

/**
 * handle successe of post group request
 * @returns dispatch to set new group state
 */
export function* handleSuccessPostGroup(): Iterable<Effect> {
  while (true) {
    const { payload } = yield take(POST_GROUP_TYPES.SUCCESS)
    yield put({ type: GroupActionTypes.Set, payload })
  }
}
