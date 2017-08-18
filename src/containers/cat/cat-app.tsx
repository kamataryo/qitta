import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { RootState } from 'store'
import CatApp, { PureOwnProps } from 'components/cat/cat-app'
import Cat from 'types/cat'
import { postCat } from 'reducers/actions'

export interface StateProps {
  cats: Cat[],
  username: string,
}

export interface DispatchProps {
  register: (username: string, catname: string) => void,
}

interface AntiStateProps {
  cats? : Cat[],
  username?: string,
  store? : any,
}

interface AntiDispatchProps {
  register?: (username: string, catname: string) => void,
}

const mapStateToProps = (state: RootState): StateProps => {
  return ({
    cats: state.cats.data,
    username: state.profile.data.username,
  })
}

const mapDispatchToProps = (dispatch: Dispatch<{}>): DispatchProps => {
  return ({
    register: (username, catname) => dispatch(postCat(username, catname)),
  })
}

const CatAppContainer = connect<StateProps, DispatchProps, PureOwnProps|AntiStateProps|AntiDispatchProps>(mapStateToProps, mapDispatchToProps)(CatApp)

export default CatAppContainer
