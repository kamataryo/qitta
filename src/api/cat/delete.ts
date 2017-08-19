// polyfill
import 'isomorphic-fetch'
import FQDN from 'config/constants/api-endpoint'

export default (id: string, owner: string) => (): Promise<object> => {
  return fetch(`http://${FQDN}/users/${owner}/cats/${id}`, {
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
