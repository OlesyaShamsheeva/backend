
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const authRoutes=require("./routes/auth")
const articleRoutes=require("./routes/article")
const userRoutes=require("./routes/user")

const keys=require("./config/keys")

mongoose.connect(keys.mongoURI)
    .then(()=>{
      console.log("Mongo")})
    .catch(error=>console.log(error))


app.use(require("morgan")("dev")) //мы в режиме разработки логирование

app.use(require("cors")("dev"))//на другом локалхосте,но можем взаимодействовать с нашим сервером

//плагины
const bodyParser=require("body-parser") //извлекает всю часть тела входящего потока запросов и предоставляет его на req.body.
app.use(bodyParser.urlencoded({extended:true})) //считывает кодирование строки
app.use(bodyParser.json({extended:true})) //генерируем из json который получаем



app.use("/api/auth",authRoutes) //метод который добавляет роуты плагины и прочее.    будет адрес после /api/auth/login
app.use("/api/article",articleRoutes)
app.use("/api/user",userRoutes)

module.exports=app //экспорт нашего файла а


