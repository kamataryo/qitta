import * as React from 'react'

interface OwnProps {
  value: string,
  onChange: (username: string) => void,
}

const Username = (props: OwnProps) => {
  const {
    value,
    // onChange,
  } = props

  return (
    <dl>
      <dt>{ 'ユーザー名' }</dt>
      <dd><input type={ 'text' } value={ value } /></dd>
    </dl>
  )
}

export default Username
