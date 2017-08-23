import * as React from 'react'
import { Provider } from 'react-redux'
import rootStore, { history } from '../store'
import { ConnectedRouter } from 'react-router-redux'
import Header from 'layouts/header'
import LoginView from 'routes/login-view'
import TaskView from 'routes/task-view'
import GroupView from 'routes/group-view'
import CatView from 'routes/cat-view'
import ProfileView from 'routes/profile-view'
import Footer from 'layouts/footer'
import { Route } from 'react-router'

const Routes = () => {
  return (
    <Provider store={ rootStore }>
      <ConnectedRouter history={ history }>
        <div>
          <Header />
          <Route path={ '/login' } component={ LoginView } exact />
          <Route path={ '/:user/tasks' } component={ TaskView } exact />
          <Route path={ '/:user/groups' } component={ GroupView } exact />
          <Route path={ '/:user/cats' } component={ CatView } exact />
          <Route path={ '/:user/profile' } component={ ProfileView } exact />
          <Footer />
        </div>
      </ConnectedRouter>
    </Provider>
  )
}
export default Routes
