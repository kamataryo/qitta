// polyfill
import 'isomorphic-fetch'
import FQDN from 'config/constants/api-endpoint'

export default (username: string, password: string) => (): Promise<object> => {
  return fetch(`http://${FQDN}/login`, {
    method: 'post',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }),
    body: JSON.stringify({ username, password }),
  })
  .then(response => {
    if (response.ok) {
      return response.json()
    } else {
      return ({ ng: true })
    }
  })
}
