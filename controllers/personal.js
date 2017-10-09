var express = require('express');
var router = express.Router();
//Aquí se agregan las rutas para los controladores
router.get('/personal', function(req, res) {
  res.sendFile(process.cwd()+'/views/personal.html');
});
router.get('/principal', function(req, res) {
  res.sendFile(process.cwd()+'/views/index.html');
});

//Con esto se exportan todas las rutas
module.exports = router;