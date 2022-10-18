const express = require("express") //подключаем express в приложение.
const controller=require("../controllers/userController")
const router = express.Router() //создаю роутер

router.post("/", controller.create)
router.get("/:id", controller.getById)
router.patch("/:id", controller.patch)


module.exports = router //экспорт нашего файла наружу