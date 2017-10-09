var express = require('express');
var router = express.Router();
//Aquí se agregan las rutas para los controladores
router.get('/', function(req, res) {
  res.sendFile(process.cwd()+'/views/index.html');
});
//ruta para acceder a personal, por el momento solo renderea el html de personal
router.use('/personal',require('./personal'));

//Con esto se exportan todas las rutas
module.exports = router;