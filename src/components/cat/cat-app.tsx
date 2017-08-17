import Cat from 'types/cat'
import * as React from 'react'
import Cats from './cats'

export interface OwnProps {
  cats: Cat[],
  unregister: (id: string) => void,
}

export default (props: OwnProps) => {

  const cats = props.cats
  const unregister = props.unregister

  return (
    <div id={ 'cat-app' }>
      <h2>{ 'cat app' }</h2>
      <Cats
        value={ cats }
        unregister={ unregister }
      />
    </div>
  )
}
