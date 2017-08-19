import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { RootState } from 'store'
import Group, { PureOwnProps } from 'components/group/group'
import { deleteGroup } from 'reducers/actions/async/group/delete'

interface StateProps {
  username: string,
}

interface AntiStateProps {
  username? : string,
  store?    : any,
}

interface DispatchProps {
  unregister: (groupname: string, username: string) => void,
}

interface AntiDispatchProps {
  unregister?: (groupname: string, username: string) => void,
}

type AllProps = PureOwnProps|AntiStateProps|AntiDispatchProps
type MapStateToProps = (State: RootState) => StateProps
type MapDispatchToProps = (Dispatch: Dispatch<{}>, Props?: PureOwnProps) => DispatchProps

const mapStateToProps: MapStateToProps = state => {
  return ({
    username : state.profile.data.username,
  })
}

const mapDispatchToProps: MapDispatchToProps = dispatch => {
  return ({
    unregister: (groupname: string, username: string) => dispatch(deleteGroup(groupname, username)),
  })
}

const GroupContainer = connect<StateProps, DispatchProps, AllProps>(mapStateToProps, mapDispatchToProps)(Group)

export default GroupContainer
