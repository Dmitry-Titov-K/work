const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const cors = require('cors')
const {connect} = require('./connect')
const dotenv = require('dotenv')
dotenv.config()

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
console.log("123")
app.use(express.static(`${__dirname}/public/uploads`))

connect()


module.exports = app