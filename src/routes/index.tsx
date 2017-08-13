import * as React from 'react'
import { Provider } from 'react-redux'
import rootStore, { history } from '../store'
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'

import Header from '../Layouts/Header'
import TaskView from '../routes/TaskView'
import GroupView from '../routes/GroupView'
import CatView from '../routes/CatView'
import ProfileView from '../routes/ProfileView'
import Footer from '../Layouts/Footer'

const Routes = () => {
  return (
    <Provider store={ rootStore }>
      <ConnectedRouter history={ history }>
        <div>
          <Header />
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
