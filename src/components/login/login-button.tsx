import * as React from 'react'

interface OwnProps {
  onClick  : () => void,
  children : React.ReactNode,
}

const LoginButton = (props: OwnProps) => {

  const { onClick, children } = props

  return (
    <button onClick={ onClick }>{ children }</button>
  )
}

export default LoginButton
