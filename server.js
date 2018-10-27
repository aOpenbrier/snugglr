const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3000
const bodyParser = require('body-parser')

app.use(express.static(path.join(__dirname, 'app/public'))) 
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json()) 				     

require('./app/routing/apiRoutes')(app)
require('./app/routing/htmlRoutes')(app)
app.listen(PORT, () => console.log('localhost:3000'))