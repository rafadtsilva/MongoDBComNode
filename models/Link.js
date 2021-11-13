const mongoose = require('mongoose')

function validator (val) {
    return val != "all"
}

const custom = [validator, `Uh oh, you does not use the word "all" like a title.`]


const linkSchema = new mongoose.Schema({
    title: { type: String, required: true, validate: custom },
    description: String,
    url: { type: String, required: true },
    click: { type: Number, default: 0 }
})

module.exports = mongoose.model('Link', linkSchema)