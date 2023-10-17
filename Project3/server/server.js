import express from 'express'

const app = express()
const PORT = process.env.PGPORT || 3000
import cors from 'cors'

// Use CORS middleware
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello, World!')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
