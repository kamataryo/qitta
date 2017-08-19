import { connect, Dispatch } from 'react-redux'
import { RootState } from 'store'
import ProfileApp, { OwnProps } from 'components/profile/profile-app'
import Profile from 'types/profile'
import { requestGetProfile } from 'reducers/actions/async/profile/get'
import Cat from 'types/cat'
import { Group } from 'types/user'

export interface StateProps {
  profile: Profile,
  cats : Cat[],
  groups: Group[],
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
    cats: state.cats.data,
    groups: state.groups.data,
  })
}

const mapDispatchToProps = (dispatch: Dispatch<{}>): DispatchProps => {
  return ({
    fetchUser: username => dispatch(requestGetProfile(username)),
  })
}

const ProfileAppContainer = connect<StateProps, DispatchProps, OwnProps|AntiStateProps|DispatchProps>(mapStateToProps, mapDispatchToProps)(ProfileApp)

export default ProfileAppContainer
