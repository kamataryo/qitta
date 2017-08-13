import * as React from 'react'

// interface OwnProps {
//   match: { params: { user: string } },
// }

const HomeView = () => {
  return (
    <div id={ 'task-view' }>
      <h1>{ 'Task View' }</h1>
      <ul>
      <li>{ '餌やり: あと2時間' }</li>
      <li>
        <div>
          <h3>{ '水交換: さとう さんが水を交換しました！' }</h3>
          <ul className={ 'reactions' }>
            <li>{ 'good!' }</li>
            <li>{ 'Thanks!' }</li>
            <li>{ 'cool!' }</li>
          </ul>
        </div>
      </li>
      <li>{ 'トイレ掃除: 予定時刻から20分が経過しています' }</li>
      <li>{ '遊ぶ' }</li>
      <li>{ 'ご飯発注' }</li>
      </ul>
    </div>
  )
}

export default HomeView
