const express = require('express')
const mainRouter = require('./router/index')
const app = express()
require('dotenv').config()

app.use(mainRouter)
app.listen(process.env.PORT)