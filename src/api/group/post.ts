// polyfill
import 'isomorphic-fetch'
import FQDN from 'config/constants/api-endpoint'

export default (username: string, groupname: string, displayName: string) => {
  return (): Promise<object> => {
    return fetch(
      `http://${FQDN}/users/${username}/groups`,
      {
        method: 'post',
        body: JSON.stringify({
          groupname,
          isGroup   : true,
          members   : [username],
          displayName,
        }),
        headers: new Headers({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }),
      },
    )
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          return ({ ng: true })
        }
      })
  }
}
