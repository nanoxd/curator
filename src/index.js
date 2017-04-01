import express from 'express'

const { PORT = 3000 } = process.env

const app = express()

app.get('/', (req, res) => {
  res.json({ message: '👋' })
})

app.listen(
  PORT,
  () => console.log(`Listening on port ${PORT}`)
)
