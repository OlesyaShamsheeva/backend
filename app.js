const express = require("express")
const authRoutes=require("./routes/auth")

const app = express()
const addArticleRoutes=require("./routes/addArticle")
const allArticlesRoutes=require("./routes/allArticles")
const detailArticleRoutes=require("./routes/detailArticle")
const myArticleRoutes=require("./routes/myArticle")
app.use("/api/auth",authRoutes) //метод который добавляет роуты плагины и прочее.    будет адрес после /api/auth/login
app.use("/api/addArticle",addArticleRoutes)
app.use("/api/allArticles",allArticlesRoutes)
app.use("/api/detailArticle",detailArticleRoutes)
app.use("/api/myArticle",myArticleRoutes)

module.exports=app //экспорт нашего файла а