import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { RootState } from 'store'
import GroupApp, { PureOwnProps } from 'components/group/group-app'
import { Group } from 'types/user'
import { postGroup } from 'reducers/actions/async/group/post'

export interface StateProps {
  groups: Group[],
  username: string,
}

export interface DispatchProps {
  register: (username: string, groupname: string, displayName: string) => void
}

interface AntiStateProps {
  groups?   : Group[],
  username? : string,
  store?    : any,
}

interface AntiDispatchProps {
  register?: (username: string, groupname: string, displayName: string) => void,
}

type AllProps = PureOwnProps|AntiStateProps|AntiDispatchProps
type MapStateToProps = (State: RootState) => StateProps
type MapDispatchToProps = (Dispatch: Dispatch<{}>, Props?: PureOwnProps) => DispatchProps

const mapStateToProps: MapStateToProps = state => {
  return ({
    groups: state.groups.data,
    username : state.profile.data.username,
  })
}

const mapDispatchToProps: MapDispatchToProps = dispatch => {
  return ({
    register: (username, groupname, displayName) => dispatch(postGroup(username, groupname, displayName)),
  })
}

const GroupAppContainer = connect<StateProps, DispatchProps, AllProps>(mapStateToProps, mapDispatchToProps)(GroupApp)

export default GroupAppContainer
