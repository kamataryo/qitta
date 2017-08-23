import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { RootState } from 'store'
import { replace } from 'react-router-redux'

interface PureOwnProps {}

export interface StateProps {
  isLoggedIn: boolean,
}

export interface DispatchProps {
  replace: (path: string) => void,
}

interface AntiStateProps {
  isLoggedIn?: boolean,
}

interface AntiDispatchProps {
  replace?: (path: string) => void,
}

type AllProps = PureOwnProps|AntiStateProps|AntiDispatchProps
type MapStateToProps = (State: RootState, props?: PureOwnProps) => StateProps
type MapDispatchToProps = (Dispatch: Dispatch<{}>, Props?: PureOwnProps) => DispatchProps

const mapStateToProps: MapStateToProps = state => {
  return ({
    isLoggedIn : !!state.profile.data.username,
  })
}

const mapDispatchToProps: MapDispatchToProps = dispatch => {
  return ({
    replace: path => dispatch(replace(path)),
  })
}

export default (Comp: any) => connect<StateProps, DispatchProps, AllProps>(mapStateToProps, mapDispatchToProps)(Comp)
