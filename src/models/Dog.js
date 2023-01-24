const { Schema, model } = require("mongoose")

const dogSchema = new Schema({
    name: String,
    description: String,
    avatar: String
});

module.exports = model('Dog', dogSchema);