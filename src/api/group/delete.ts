// polyfill
import 'isomorphic-fetch'
import FQDN from 'config/constants/api-endpoint'

export default (username: string, groupname: string) => (): Promise<object> => {
  return fetch(`http://${FQDN}/users/${username}/groups/${groupname}`, {
    method: 'delete',
  })
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        return ({ ng: true })
      }
    })
}
