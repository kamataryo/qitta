import { Effect } from 'redux-saga/effects'

import GetProfileSagas from './profile/get'
import PostGroupSagas from './group/post'
import DeleteGroupSagas from './group/delete'
import PostCatSagas from './cat/post'
import DeleteCatSagas from './cat/delete'

export default function* rootSaga(): Iterable<Effect> {
  yield* GetProfileSagas
  yield* PostGroupSagas
  yield* DeleteGroupSagas
  yield* PostCatSagas
  yield* DeleteCatSagas
}
