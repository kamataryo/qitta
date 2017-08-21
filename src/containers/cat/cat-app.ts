import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { RootState } from 'store'
import CatApp, { PureOwnProps } from 'components/cat/cat-app'
import Cat from 'types/cat'
import { postCat } from 'reducers/actions/async/cat/post'

export interface StateProps {
  cats     : Cat[],
  username : string,
}

export interface DispatchProps {
  register: (username: string, catname: string) => void,
}

interface AntiStateProps {
  cats?     : Cat[],
  username? : string,
  store?    : any,
}

interface AntiDispatchProps {
  register?: (username: string, catname: string) => void,
}

type AllProps = PureOwnProps|AntiStateProps|AntiDispatchProps
type MapStateToProps = (State: RootState) => StateProps
type MapDispatchToProps = (Dispatch: Dispatch<{}>, Props?: PureOwnProps) => DispatchProps

const mapStateToProps: MapStateToProps = state => {
  return ({
    cats     : state.cats.data,
    username : state.profile.data.username,
  })
}

const mapDispatchToProps: MapDispatchToProps = dispatch => {
  return ({
    register: (username, catname) => dispatch(postCat(username, catname)),
  })
}

const CatAppContainer = connect<StateProps, DispatchProps, AllProps>(mapStateToProps, mapDispatchToProps)(CatApp)

export default CatAppContainer
