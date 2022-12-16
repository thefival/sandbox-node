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
// const db = require('./util/database')
const sequelize = require('./util/database')

app.use(bodyParser.urlencoded({ extended: false })) //built in parser
app.use(express.static(path.join(__dirname, 'public'))) //static paths

app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.use(errorController.get404) 

sequelize.sync().then(result => {
    // console.log(result)
    app.listen(3000)
})
.catch(err => {console.log(err)})

