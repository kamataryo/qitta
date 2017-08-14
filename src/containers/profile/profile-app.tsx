import { connect } from 'react-redux'
import { RootState } from 'store'
import ProfileApp, { OwnProps } from 'components/profile/profile-app'
import { Profile } from 'reducers/profile'

export interface StateProps {
  profile: Profile,
}

interface AntiStateProps {
  profile? : Profile,
  store? : any,
}

const mapStateToProps = (state: RootState): StateProps => {
  return ({
    profile: state.profile.data,
  })
}

const ProfileAppContainer = connect<StateProps, {}, OwnProps|AntiStateProps>(mapStateToProps, {})(ProfileApp)

export default ProfileAppContainer
