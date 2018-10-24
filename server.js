const express = require('express')
const app = express()
const path = require('path')
const PORT = 3000

app.use(express.static(path.join(__dirname, 'app/public'))) 

require('./app/routing/apiRoutes')(app)
require('./app/routing/htmlRoutes')(app)
app.listen(PORT, () => console.log('localhost:3000'))