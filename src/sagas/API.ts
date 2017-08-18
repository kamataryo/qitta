declare const __PROD__: boolean

// polyfill
import 'isomorphic-fetch'

const FQDN = __PROD__ ? 'qitta-api.biwako.io' : 'localhost:3001'

const user = (username: string) => (): Promise<object> => fetch(`http://${FQDN}/users/${username}`)
  .then(response => {
    if (response.ok) {
      return response.json()
    } else {
      return ({ ng: true })
    }
  })

const deleteCat = (id: string, owner: string) => (): Promise<object> => fetch(`http://${FQDN}/users/${owner}/cats/${id}`, {
  method: 'delete',
})
  .then(response => {
    if (response.ok) {
      return response.json()
    } else {
      return ({ ng: true })
    }
  })

const postCat = (owner: string, catname: string) => (): Promise<object> => fetch(
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

export default {
  user,
  deleteCat,
  postCat,
}
