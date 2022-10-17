
const app=require("./app") // импорт из другого файла

const port=process.env.PORT||5000 // создаем порт , в локал стораж изначальный путь.

app.listen(port, () => console.log(`Server has been started ${port}`))
//создаем наш сервер, задаем каллбэк функцию.которая выполнится при загрузке. 5000-в localhost изначальный путь
