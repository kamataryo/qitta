import * as React from 'react'
import { Group as GroupProp } from 'types/user'
import Group from '../../containers/group/group'
import * as update from 'immutability-helper'

export interface PureOwnProps {}

export interface ConnectedProps {
  groups: GroupProp[],
  username: string,
  register: (username: string, groupName: string, displayName: string) => void,
}

interface OwnProps extends PureOwnProps, ConnectedProps {}

interface OwnState {
  newGroup: {
    name: string,
    displayName: string,
  },
}

export default class GroupApp extends React.Component<OwnProps, OwnState> {

  public constructor(props: OwnProps) {
    super(props)
    this.state = {
      newGroup: {
        name        : '',
        displayName : '',
      },
    }
    this.onNewGroupNameChange = this.onNewGroupNameChange.bind(this)
    this.onNewGroupDisplayNameChange = this.onNewGroupDisplayNameChange.bind(this)
    this.onRegisterClick = this.onRegisterClick.bind(this)
  }

  private onNewGroupNameChange(e: React.FormEvent<{}>) {
    this.setState(update(this.state, { newGroup: { name: { $set: (e.target as HTMLInputElement).value } } }))
  }

  private onNewGroupDisplayNameChange(e: React.FormEvent<{}>) {
    this.setState(update(this.state, { newGroup: { displayName: { $set: (e.target as HTMLInputElement).value } } }))
  }

  private onRegisterClick() {
    const groupname = this.state.newGroup.name
    const displayName = this.state.newGroup.displayName
    const username = this.props.username
    this.props.register(username, groupname, displayName)
  }

  public render() {

    const newGroup = this.state.newGroup
    const groups = this.props.groups

    return (
      <div id={ 'group-app' }>
        <h2>{ 'group app' }</h2>
        <ul>
          {
            groups.map(group => (
              <li key={ `group-id-${group.groupName}` }>
                <Group group={ group } />
              </li>
            ))
          }
        </ul>
        <h3>{ '新しいグループに所属する' }</h3>
        <input
          type={ 'text' }
          value={ newGroup.name }
          onChange={ this.onNewGroupNameChange }
          placeholder={ '(slug)' }
        />
        <input
          type={ 'text' }
          value={ newGroup.displayName }
          onChange={ this.onNewGroupDisplayNameChange }
          placeholder={ '(表示する名前)' }
        />
        <button onClick={ this.onRegisterClick }>
          { '所属' }
        </button>
      </div>
    )
  }
}
