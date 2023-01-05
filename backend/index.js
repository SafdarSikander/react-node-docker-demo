const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
const PORT = 4040

app.get('/', (req, res) => {
  res.json({
    message:'Hi from Backend.'
  })
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})