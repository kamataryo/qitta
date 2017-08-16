import { connect, Dispatch } from 'react-redux'
import { RootState } from 'store'
import ProfileApp, { OwnProps } from 'components/profile/profile-app'
import Profile from 'types/profile'
import { requestUser } from 'reducers/actions'

export interface StateProps {
  profile: Profile,
}

interface AntiStateProps {
  profile? : Profile,
  store? : any,
}

export interface DispatchProps {
  fetchUser: (username: string) => void,
}

const mapStateToProps = (state: RootState): StateProps => {
  return ({
    profile: state.profile.data,
  })
}

const mapDispatchToProps = (dispatch: Dispatch<{}>): DispatchProps => {
  return ({
    fetchUser: username => dispatch(requestUser(username)),
  })
}

const ProfileAppContainer = connect<StateProps, DispatchProps, OwnProps|AntiStateProps|DispatchProps>(mapStateToProps, mapDispatchToProps)(ProfileApp)

export default ProfileAppContainer
