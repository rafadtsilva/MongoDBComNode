const express = require('express')
const app = express()
const port = 3000;
const mongoose = require('mongoose')
const linkRoute = require('./routes/linkRoute')


mongoose.connect('mongodb://localhost/newLinks')

let db = mongoose.connection;

db.on("error", () => console.log("Houve um error") )
db.once("open", () => console.log("Banco Carregado" ))

app.use('/', linkRoute)

app.listen(port, () => console.log(`Example app listening on por ${port}`))


















//INSERIR UMA PESSOA

// const personSchema = new mongoose.Schema({ 
//     name: String,
//     age: Number
// })

// const Person = mongoose.model('Person', personSchema);

// let person = new Person({ name: "José", age: 23 });

// person.save().then( doc => console.log(doc) )


// let link = new Link({
//     title: "twitter",
//     description: "Link para o twitter",
//     url: "https://twitter.com/progrbr",
//     // click: 0
// })

// link.save().then(doc => {
//     console.log(doc)
// }).catch(error => {
//     console.log(error)
// })




// mongoose.connect('mongodb://localhost/blog').then(db => {
//     // console.log(db)
// }).catch(error => {
//     console.log(error)
// })



