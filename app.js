const express = require("express")
const authRoutes=require("./routes/auth")
const cors=require("cors")
const morgan=require("morgan")


//плагины
const bodyParser=require("body-parser") //извлекает всю часть тела входящего потока запросов и предоставляет его на req.body.


const app = express()
const addArticleRoutes=require("./routes/addArticle")
const allArticlesRoutes=require("./routes/allArticles")
const detailArticleRoutes=require("./routes/detailArticle")
const myArticleRoutes=require("./routes/myArticle")

//плагины
app.use(bodyParser.urlencoded({extended:true})) //считывает кодирование строки
app.use(bodyParser.json({extended:true})) //генерируем из json который получаем


app.use("/api/auth",authRoutes) //метод который добавляет роуты плагины и прочее.    будет адрес после /api/auth/login
app.use("/api/addArticle",addArticleRoutes)
app.use("/api/allArticles",allArticlesRoutes)
app.use("/api/detailArticle",detailArticleRoutes)
app.use("/api/myArticle",myArticleRoutes)

module.exports=app //экспорт нашего файла а