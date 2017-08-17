import CatObject from 'types/cat'
import * as React from 'react'
import Cat from './cat'

export interface OwnProps {
  value: CatObject[],
  unregister: (id: string) => void,
}

export default (props: OwnProps) => {

  const cats = props.value
  const unregister = props.unregister

  return (
    <ul>
      {
        cats.map(cat => (
          <li key={ `cat-id-${cat.id}` }>
            <Cat
              value={ cat }
              unregister={ unregister }
            />
          </li>
        ))
      }
    </ul>
  )

}
