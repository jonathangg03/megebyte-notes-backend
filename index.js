const express = require('express')
const cors = require('cors')
const db = require('./db')
const notes = require('./routes/notes')
const { port, dbUri } = require('./config')

const app = express()
db(dbUri)

app.set('port', port)
app.use(cors())
app.use(express.json())

app.use('/notes', notes)

app.listen(port, () => console.log(`Listen on port ${port}`))
