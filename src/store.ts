import { combineReducers, createStore, applyMiddleware, Reducer } from 'redux'
import taskReducer, { TaskState } from './reducers/task'
import groupReducer, { GroupState } from './reducers/group'
import catReducer, { CatState } from './reducers/cat'
import profileReducer, { ProfileState } from './reducers/profile'
import loginReducer from './reducers/login'
import { LoginState } from './reducers/login/state'
import createBrowserHistory from 'history/createBrowserHistory'
import { routerReducer, RouterState, routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from 'sagas'

export const history = createBrowserHistory()

const sagaMiddleWare = createSagaMiddleware()

const middlewares = [
  sagaMiddleWare,
  routerMiddleware(history),
]

export interface RootState {
  task    : TaskState,
  groups  : GroupState,
  cats    : CatState,
  profile : ProfileState,
  login   : LoginState,
  routing : RouterState,
}

const rootReducer = combineReducers({
  task    : taskReducer,
  groups  : groupReducer,
  cats    : catReducer,
  profile : profileReducer,
  login   : loginReducer,
  routing : routerReducer as Reducer<RouterState>,
})

const rootStore = createStore(
  rootReducer,
  applyMiddleware(...middlewares),
)

sagaMiddleWare.run(rootSaga as any) // TODO: type error

// TODO: Embed __VERSION__ and __COMMITHASH__ into `meta State`
declare const __VERSION__: string
console.log(__VERSION__)

export default rootStore
