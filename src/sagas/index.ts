import {
  fork,
  Effect,
} from 'redux-saga/effects'

import {
  handleRequestGetProfile,
  handleSuccessGetProfile,
} from './profile/get'

import {
  handleRequestPostGroup,
  handleSuccessPostGroup,
} from './group/post'

import {
  handleRequestDeleteGroup,
  handleSuccessDeleteGroup,
} from './group/delete'

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

  yield fork(handleRequestPostGroup)
  yield fork(handleSuccessPostGroup)

  yield fork(handleRequestDeleteGroup)
  yield fork(handleSuccessDeleteGroup)

  yield fork(handleRequestDeleteCat)
  yield fork(handleSuccessDeleteCat)

  yield fork(handleRequestPostCat)
  yield fork(handleSuccessPostCat)
}
