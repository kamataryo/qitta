// polyfill
import 'isomorphic-fetch'

const user = (username: string) => (): Promise<object> => fetch(`http://localhost:3001/users/${username}`)
  .then(response => {
    if (response.ok) {
      return response.json()
    } else {
      return ({ ng: true })
    }
  })

export default {
  user,
}
