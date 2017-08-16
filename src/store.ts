import { combineReducers, createStore, applyMiddleware, Reducer } from 'redux'
import taskReducer, { TaskState } from './reducers/task'
import groupReducer, { GroupState } from './reducers/group'
import catReducer, { CatState } from './reducers/cat'
import profileReducer, { ProfileState } from './reducers/profile'
import createBrowserHistory from 'history/createBrowserHistory'
import { routerReducer, RouterState, routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
// import mySaga from './sagas'
import rootSaga from 'sagas'

export const history = createBrowserHistory()

const sagaMiddleWare = createSagaMiddleware()

const middlewares = [
  sagaMiddleWare,
  routerMiddleware(history),
]

export interface RootState {
  task    : TaskState,
  group   : GroupState,
  cat     : CatState,
  profile : ProfileState,
  routing : RouterState,
}

const rootReducer = combineReducers({
  task    : taskReducer,
  group   : groupReducer,
  cat     : catReducer,
  profile : profileReducer,
  routing : routerReducer as Reducer<RouterState>,
})

const rootStore = createStore(
  rootReducer,
  applyMiddleware(...middlewares),
)

sagaMiddleWare.run(rootSaga as any) // TODO: type error

export default rootStore
