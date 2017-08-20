import * as React from 'react'
import { Provider } from 'react-redux'
import rootStore, { history } from '../store'
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'

import Header from 'layouts/header'
import LoginView from 'routes/login-view'
import TaskView from 'routes/task-view'
import GroupView from 'routes/group-view'
import CatView from 'routes/cat-view'
import ProfileView from 'routes/profile-view'
import Footer from 'layouts/footer'

const Routes = () => {
  return (
    <Provider store={ rootStore }>
      <ConnectedRouter history={ history }>
        <div>
          <Header />
          <Route path={ '/login' } component={ LoginView } />
          <Route path={ '/:user/tasks' } component={ TaskView } />
          <Route path={ '/:user/groups' } component={ GroupView } />
          <Route path={ '/:user/cats' } component={ CatView } />
          <Route path={ '/:user/profile' } component={ ProfileView } />
          <Footer />
        </div>
      </ConnectedRouter>
    </Provider>
  )
}
export default Routes
