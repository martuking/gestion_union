var express = require('express')
var router = express.Router()
//Aquí se agregan las rutas para los controladores
router.get('/', function(req, res) {
  res.sendFile(process.cwd()+'/views/index.html')
})
router.use('/personal',require('./personalController'))

//Con esto se exportan todas las rutas
module.exports = router