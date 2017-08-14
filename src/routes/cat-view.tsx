import * as React from 'react'
import CatApp from 'containers/cat/cat-app'

// interface OwnProps {
//   match: { params: { user: string } },
// }

const CatView = () => {
  return (
    <div id={ 'cat-view' }>
      <h1>{ 'Cat View' }</h1>
      <CatApp />
    </div>
  )
}

export default CatView
