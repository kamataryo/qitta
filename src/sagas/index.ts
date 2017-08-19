import {
  fork,
  Effect,
} from 'redux-saga/effects'

import {
  handleRequestGetProfile,
  handleSuccessGetProfile,
} from './profile/get'

import {
  handleRequestPostCat,
  handleSuccessPostCat,
} from './cat/post'

import {
  handleRequestDeleteCat,
  handleSuccessDeleteCat,
} from './cat/delete'

export default function* rootSaga(): Iterable<Effect> {
  yield fork(handleRequestGetProfile)
  yield fork(handleSuccessGetProfile)

  yield fork(handleRequestDeleteCat)
  yield fork(handleSuccessDeleteCat)

  yield fork(handleRequestPostCat)
  yield fork(handleSuccessPostCat)
}
