// polyfill
import 'isomorphic-fetch'
import FQDN from 'config/constants/api-endpoint'

export default (username: string) => (): Promise<object> => fetch(`http://${FQDN}/users/${username}`)
  .then(response => {
    if (response.ok) {
      return response.json()
    } else {
      return ({ ng: true })
    }
  })
