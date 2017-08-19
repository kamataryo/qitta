// polyfill
import 'isomorphic-fetch'
import FQDN from 'config/constants/api-endpoint'

export default (owner: string, catname: string) => {
  return (): Promise<object> => {
    return fetch(
      `http://${FQDN}/users/${owner}/cats`,
      {
        method: 'post',
        body: JSON.stringify({ name: catname }),
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
