import { connect, Dispatch } from 'react-redux'
import { RootState } from 'store'
import ProfileApp, { OwnProps } from 'components/profile/profile-app'
import Profile from 'types/profile'
import Cat from 'types/cat'
import { Group } from 'types/user'
import { creator as actionCreator } from 'reducers/login/action/creators'

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
  logout: () => void,
}

const mapStateToProps = (state: RootState): StateProps => {
  console.log(state)
  return ({
    profile: state.profile.data,
    cats: state.cats.data,
    groups: state.groups.data,
  })
}

const mapDispatchToProps = (dispatch: Dispatch<{}>) : DispatchProps => ({
  logout: () => dispatch(actionCreator.logout()),
})

const ProfileAppContainer = connect<StateProps, DispatchProps, OwnProps|AntiStateProps|DispatchProps>(mapStateToProps, mapDispatchToProps)(ProfileApp)

export default ProfileAppContainer
