const express = require("express") //подключаем express в приложение.
const controller = require("../controllers/userController")
const upload = require("../middleware/upload")
const passport = require("passport");
const router = express.Router() //создаю роутер


router.get("/:id", passport.authenticate("jwt", {session: false}), controller.getById)
// router.patch("/:id", upload.single("image"),
//     passport.authenticate("jwt", {session: false}), controller.update)

//обновление картинок
router.post('/', passport.authenticate('jwt', {session: false}), upload.single('image'), controller.create)
router.patch('/:id', passport.authenticate('jwt', {session: false}), upload.single('image'), controller.update)
module.exports = router //экспорт нашего файла наружу