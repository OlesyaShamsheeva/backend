const express = require("express") //подключаем express в приложение.
const controller = require("../controllers/userController")
const upload = require("../middleware/upload")
const passport = require("passport");
const router = express.Router() //создаю роутер


router.get("/:id", passport.authenticate("jwt", {session: false}), controller.getById)
// router.patch("/:id", upload.single("image"),
//     passport.authenticate("jwt", {session: false}), controller.update)
router.post('/',upload.single("image"),
    passport.authenticate("jwt", {session: false}),controller.create)

module.exports = router //экспорт нашего файла наружу