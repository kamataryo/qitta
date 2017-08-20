import * as React from 'react'
import ProfileApp from 'containers/profile/profile-app'

// interface OwnProps {
//   match: { params: { user: string } },
// }

const ProfileView = () => {
  return (
    <div id={ 'profile-view' }>
      <ProfileApp />
    </div>
  )
}

export default ProfileView
