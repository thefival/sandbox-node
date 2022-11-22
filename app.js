//built-in package
const path = require('path')

//third party packages
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

//sets template engine
app.set('view engine', 'ejs')
// app.set('views', 'views')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const errorController = require('./controllers/error')

app.use(bodyParser.urlencoded({ extended: false })) //built in parser
app.use(express.static(path.join(__dirname, 'public'))) //static paths

app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.use(errorController.get404) 

app.listen(3000)
