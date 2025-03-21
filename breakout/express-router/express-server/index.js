// REQUIREMENTS
const express = require('express')

// SETUP & MIDDLEWARE
const app = express()
const port = 3000

app.use(express.json())

// ROUTES
app.use('/api/users', require('./routes/users'))
app.use('/api/fruits', require('./routes/fruits'))

// LISTENER
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})