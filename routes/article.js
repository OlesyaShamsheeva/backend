const express = require("express");
const controller=require("../controllers/articleController")
const router = express.Router()


router.post('/', controller.create)
router.get('/', controller.getAll)
router.get('/:id', controller.getById)



module.exports = router