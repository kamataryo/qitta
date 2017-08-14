import * as React from 'react'
import { Cat as CatObject } from 'reducers/cat'

interface OwnProps {
  value: CatObject,
}

const Cat = (props: OwnProps) => {

  const cat = props.value

  return (
    <div className={ 'cat' }>
      <h3>{ cat.name }</h3>
    </div>
  )

}

export default Cat
