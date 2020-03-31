import express from 'express'

const app = express()

app.use(express.static('dist'))

app.get('/api', (req, res) => {
  res.json({
    code: 200,
    data: 'test api',
    msg: null
  })
})

app.listen('9999', () => {
  process.stdout.write('it works at http://localhost:9999')
})