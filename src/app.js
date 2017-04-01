import express from 'express'
import bodyParser from 'body-parser'

const app = express()

// Middleware
app.use(bodyParser.json())

// Routes
app.get('/', (req, res) => {
  res.json({ message: '👋' })
})

export default app
