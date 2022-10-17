const express = require("express");
const controller=require("./controllers/addArticle")
module.exports.create = function(req, res) {

}

const router = express.Router()
router.post('/', controller.create)
module.exports = router //экспорт нашего файла наружу