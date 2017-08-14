import * as express from 'express'

const app = express()

app.get('/:user/cats', (req, res) => {

  const user: string = req.params.user

  if (true) { // ${user} exists
    res
      .status(200)
      .send({ user })
  }// else {
  //   res
  //     .status(404)
  //     .send('404 not found')
  // }

})

app.listen(3000, () => {
  process.stdout.write('Server is listening...')
})
