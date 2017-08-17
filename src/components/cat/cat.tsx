import * as React from 'react'
import CatObject from 'types/cat'

interface OwnProps {
  value: CatObject,
}

const Cat = (props: OwnProps) => {

  const cat = props.value

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
    </div>
  )

}

export default Cat
