import * as React from 'react'
import LoginApp from 'containers/login/login-app'

const LoginView = () => {
  return (
    <div id={ 'login-view' }>
      <h1>{ 'Login View' }</h1>
      <LoginApp />
    </div>
  )
}

export default LoginView
