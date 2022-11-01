// core module imports
// third party package

const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
// const { response } = require('express')

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(express.static(path.join(__dirname, 'public'))) //serves files statically, comes with express

//outsourced routes
app.use('/admin', adminRoutes)
app.use('/shop', shopRoutes)

//cath all route
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(3000)