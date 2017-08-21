import * as React from 'react'

interface OwnProps {
  value: string,
  onChange: (password: string) => void,
}

const Password = (props: OwnProps) => {
  const {
    value,
  } = props

  const onChange = (e: React.FormEvent<{}>) => {
    const val = (e.target as HTMLInputElement).value
    return props.onChange(val)
  }

  return (
    <dl>
      <dt>{ 'パスワード' }</dt>
      <dd>
        <input
          type={ 'password' }
          value={ value }
          onChange={ onChange }
        />
      </dd>
    </dl>
  )
}

export default Password
