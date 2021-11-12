const express = require('express')
const app = express()
const port = 3000;
const mongoose = require('mongoose')

const linkSchema = new mongoose.Schema({
    title: String,
    description: String,
    url: String,
    click: Number
})

const Link = mongoose.model('Link', linkSchema)

let link = new Link({
    title: "progbr",
    description: "Link para o twitter",
    url: "https://twitter.com/progrbr",
    click: 0
})

link.save().then(doc => {
    console.log(doc)
}).catch(error => console.log(error))

mongoose.connect('mongodb://localhost/newLinks')

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