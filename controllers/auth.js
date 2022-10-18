module.exports.authorization= (req, res) => {
  res.status(200).json({
    login: {
      emailAddress: req.body.emailAddress,
      password: req.body.password,
    }
  })
}
module.exports.registration = (req, res) => {
  res.status(200).json({
    registration: "from controller"
  })
}


//req-получить данные от клиента

