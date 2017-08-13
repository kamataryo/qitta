import * as React from 'react'
import Reactions from 'components/reactions'
import { Task } from 'reducers/task'

export interface OwnProps {
  value: Task[]
}

export default class Tasks extends React.Component<OwnProps, {}> {

  public render() {
    const tasks = this.props.value

    return (
      <ul>
        { tasks.map(task => (
          <li>
            { task.toString() }
            <Reactions />
          </li>
        )) }
      </ul>
    )
  }

}


// <ul>
// <li>{ '餌やり: あと2時間' }</li>
// <li>
//   <div>
//     <h3>{ '水交換: さとう さんが水を交換しました！' }</h3>
//     <Reactions />
//   </div>
// </li>
// <li>{ 'トイレ掃除: 予定時刻から20分が経過しています' }</li>
// <li>{ '遊ぶ' }</li>
// <li>{ 'ご飯発注' }</li>
// </ul>
