const User = require("../models/User")
const errorHandler = require("../utils/errorHandler");


module.exports.getById = async (req, res) => {
  try {
    const users = await User.find({
      _id: req.params.id
    })
  } catch (e) {
    errorHandler(res, e)
  }
}
//получить конкретного юзера

module.exports.create=
    async (req, res) => {
      try{  const user=new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        description: req.body.description,
        avatar: req.file?req.file.path:""
      })
    await  user.save()
        res.status(201).json(user)
      }
      catch(e){
    errorHandler((res,e))
      }
    }
//создание аватара
// module.exports.update = async (req, res) => {
//   try {
//     const update = await new User ({
//       firstName: req.body.firstName,
//       lastName: req.body.lastName,
//       description: req.body.description,
//
//     }).save()
//   const user = await User.findOneAndUpdate(
//       {_id: req.params.id},
//       {$set: req.body},
//       {new: true}
//   )
//   res.status(200).json(user)
// }
// catch
// (e)
// {
//   errorHandler(res, e)
// }
// }
// //изменять