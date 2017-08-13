import * as React from 'react'

// interface OwnProps {
//   match: { params: { user: string } },
// }

const CatView = () => {
  return (
    <div id={ 'cat-view' }>
      <h1>{ 'Cat View' }</h1>
      <ul>
        <li>{ 'すもも' }</li>
        <li>{ 'こもも' }</li>
        <li>{ 'やまもも' }</li>
      </ul>
    </div>
  )
}

export default CatView
