import CatProps from 'types/cat'
import * as React from 'react'
import Cat from '../../containers/cat/cat'
import * as update from 'immutability-helper'

export interface PureOwnProps {}

export interface OwnState {
  newCat: {
    name: string,
  },
}

export interface ConnectedProps {
  cats: CatProps[],
  username: string,
  register: (username: string, catname: string) => void,
}

interface OwnProps extends PureOwnProps, ConnectedProps {}

export default class CatApp extends React.Component<OwnProps, OwnState> {

  public constructor(props: OwnProps) {
    super(props)
    this.state = {
      newCat: {
        name: '',
      },
    }
    this.onNameChange = this.onNameChange.bind(this)
    this.onRegisterClick = this.onRegisterClick.bind(this)
  }

  private onNameChange(e: React.FormEvent<{}>) {
    this.setState(update(this.state, { newCat: { name: { $set: (e.target as HTMLInputElement).value } } }))
  }

  private onRegisterClick() {
    const catname = this.state.newCat.name
    const username = this.props.username
    this.props.register(username, catname)
  }

  public render() {

    const { newCat } = this.state
    const { cats } = this.props

    return (
      <div id={ 'cat-app' }>
        <h2>{ 'cat app' }</h2>
        <ul>
          {
            cats.map(cat => (
              <li key={ `cat-id-${cat.id}` }>
                <Cat cat={ cat } />
              </li>
            ))
          }
        </ul>
        <div>
          <h3>{ '新しいネコの登録' }</h3>
          <input
            type={ 'text' }
            value={ newCat.name }
            onChange={ this.onNameChange }
          />
          <button
            disabled={ !newCat.name }
            onClick={ this.onRegisterClick }
          >
          { '登録' }
          </button>
        </div>
      </div>
    )
  }
}
