import * as React from 'react'

// interface OwnProps {
//   match: { params: { user: string } },
// }

const GroupView = () => {
  return (
    <div id={ 'group-view' }>
      <h1>{ 'Group View' }</h1>
      <ul>
        <li>{ 'かまた家' }</li>
        <li>{ 'シェアハウス 猫だらけ' }</li>
        <li>{ '株式会社 cat system' }</li>
      </ul>
    </div>
  )
}

export default GroupView
