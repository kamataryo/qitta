import * as React from 'react'
import CatObject from 'types/cat'

interface OwnProps {
  value: CatObject,
  unregister: (id: string) => void,
}

const Cat = (props: OwnProps) => {

  const cat = props.value
  const createUnregisterHandler = (id: string) => () => props.unregister(id)

  return (
    <div className={ 'cat' }>
      <dl>
        <dt>{ 'ねこID' }</dt>
        <dd>{ cat.id }</dd>
      </dl>
      <dl>
        <dt>{ 'ねこ名前' }</dt>
        <dd>{ cat.name }</dd>
      </dl>
      <button onClick={ createUnregisterHandler(cat.id) }>{ 'このネコの登録を解除' }</button>
    </div>
  )

}

export default Cat
