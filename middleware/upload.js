const multer=require("multer")
const moment= require("moment")

//загрузка файлов
const storage=multer.diskStorage({
  destination(req,file,cb){
    cb(null,"uploads/")
  },
  filename(req,file,cb){
    const date=moment().format("DDMMYYYY--HHmmss SSS")
    cb(null,`#{date}-${file.originalname}`)
  }
})//как файлы будут загружаться и хранится

//фильтрация файлов

const fileFilter=(req,res,cb)=>{
  if(file.mimetype==="image/png"||file.mimetype==="image/jpeg"){
    cb(null,true)
  }
  else{
    cb(null,false)
  }
}
//mimetype если файл картинка ,то пропускаем


//лимит размера картинок
const limits={
  fileSize: 1024*1024*5
}
module.exports=multer({storage, fileFilter, limits,})