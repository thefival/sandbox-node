const Sequelize = require('sequelize')

//have to set up local connection once cloned
const sequelize = new Sequelize('node-complete', 'root', 'bangarang', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize


// const mysql = require('mysql2')

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'node-complete',
//     password: '###########'
// })

// module.exports = pool.promise()