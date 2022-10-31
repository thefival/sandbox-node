// core module imports
// third party package
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const { response } = require('express');

app.use(bodyParser.urlencoded({ extended: false }));

//outsourced routes
app.use('/admin', adminRoutes);
app.use(shopRoutes);

//cath all route
app.use((req, res, next) => {
    res.status(404).send("<h1>Page not found</h1>")
})

app.listen(3000);
