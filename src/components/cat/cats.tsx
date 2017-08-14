import { Cat as CatObject } from 'reducers/cat'
import * as React from 'react'
import Cat from './cat'

export interface OwnProps {
  value: CatObject[],
}

export default (props: OwnProps) => {

  const cats = props.value

  return (
    <ul>
      {
        cats.map(cat => (
          <li key={ `cat-id-${cat.id}` }>
            <Cat value={ cat } />
          </li>
        ))
      }
    </ul>
  )

}
