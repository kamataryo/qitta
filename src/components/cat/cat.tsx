import * as React from 'react'
import CatProps from 'types/cat'

export interface PureOwnProps {
  cat: CatProps,
}

interface ConnectedProps {
  username: string,
  unregister: (id: string, owner: string) => void,
}

interface OwnProps extends PureOwnProps, ConnectedProps {}

const Cat = (props: OwnProps) => {

  const { cat, username } = props
  const createUnregisterHandler = (id: string, owner: string) => () => props.unregister(id, owner)

  return (
    <div className={ 'cat' }>
      <dl>
        <dt>{ 'ねこID' }</dt>
        <dd>{ cat.id }</dd>
      </dl>
      <dl>
        <dt>{ 'ねこの名前' }</dt>
        <dd>{ cat.name }</dd>
      </dl>
      <button onClick={ createUnregisterHandler(cat.id, username) }>{ 'このネコの登録を解除' }</button>
    </div>
  )

}

export default Cat
