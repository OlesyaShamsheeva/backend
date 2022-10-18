const mongoose = require("mongoose")
const Schema = mongoose.Schema

const articleSchema = new Schema({

}) // создаем схему


module.exports=mongoose.model("articles",articleSchema)