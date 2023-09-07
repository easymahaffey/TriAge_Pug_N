const express = require("express")
const app = express()
const cors = require("cors")
const helmet = require("helmet")

const session = require("./auth/connectSession")
const routes = require("./routes")
const PORT = process.env.PORT || 8060

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
// app.use(helmet())

session(app)
// For PUG
app.set('view engine', 'pug');
app.set('views', 'views');
app.set('assets', './assets');

app.use(express.static(__dirname + '/public'))
app.use(routes)
require("./db/dbConnect")

app.listen(PORT, () => console.log(`The server LISTENS on port ${PORT}... go there.`))

module.exports = app;