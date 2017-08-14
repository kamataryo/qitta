import * as React from 'react'
import ProfileApp from 'containers/profile/profile-app'

// interface OwnProps {
//   match: { params: { user: string } },
// }

const ProfileView = () => {
  return (
    <div id={ 'profile-view' }>
      <h1>{ 'Profile View' }</h1>
      <ProfileApp />
    </div>
  )
}

export default ProfileView
