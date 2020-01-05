// const express = require('express')
// const app = express()
// const port = 3000
// const Sequelize = require('sequelize')
// const db_models = require('./models/database_models')
// const Strings = require('../config/strings')

// // const sequelize = new Sequelize(Strings.bottles_table_name, Strings.db_username,Strings.db_password,
// //     {
// //         host: Strings.db_name,
// //         dialect: Strings.db_dialects
// //     })

// sequelize
//     .authenticate()
//     .then(() => {
//         console.log('connection established')})
//     .catch(err => {
//         console.err("didn't connect")})

// db_models.Bottles.sync({ force: false})
//     .then(() => {
//         console.log('table synced')
//     })
//     .catch(err => 
//         console.err("couldn't sync table"))

// app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(port, () => console.log('Example app listening on port ${port}!'))