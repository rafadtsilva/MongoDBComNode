const express = require('express')
const app = express()
const port = 3000;
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/links')

let db = mongoose.connection;

db.on("error", () => { console.log("Houve um error")} )
db.once("open", () => { console.log("Banco Carregado")} )


// mongoose.connect('mongodb://localhost/blog').then(db => {
//     // console.log(db)
// }).catch(error => {
//     console.log(error)
// })




app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on por ${port}`))