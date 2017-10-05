var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var personalSchema = new Schema({
	
	cod : String,
	apellido1 : String,
	apellido2 : String,
	nombre : String,
	rut : Number,
	domicilio : String,
	cargo : String,
	dp : Number,
	sexo : String,
	fechaNacimiento : Date,
	fechaIngreso : Date,
	sueldoBase : Number,
	estadoCivil : String,
	porcentajeCom: Number,
	afp : String,
	cargas : Number,
	inval : Boolean,
	isapre : String,
	tramo : Number,
	dosPorciento : Boolean,
	gratificacion : Boolean,
	montoPactado : Number
	porcentajeZona : Boolean
	{timestap : true});

create = function(json){
	var newPersonal = new personal({
		cod : json.cod,
		apellido1 : json.apellido1,
		apellido2 : json.apellido2,
		nombre : json.nombre,
		rut : json.rut,
		domicilio : json.domicilio,
		cargo : json.cargo,
		dp : json.dp,
		sexo : json.sexo,
		fechaNacimiento : json.fechaNacimiento,
		fechaIngreso : json.fechaIngreso,
		sueldoBase : json.sueldoBase,
		estadoCivil : json.estadoCivil,
		porcentajeCom : json.porcentajeCom,
		afp : json.afp,
		cargas : json.cargas,
		inval : json.inval,
		isapre : json.isapre,
		tramo : json.tramo,
		dosPorciento : json.dosPorciento,
		gratificacion : json.gratificacion,
		montoPactado : json.montoPactado,
		porcentajeZona : json.porcentajeZona
	});
	personal.save(function(err){
		if (err) {
      		return console.log("Ocurrio un error al guardar nuevo personal en la base de datos");
		}
		else{
			return console.log("Se guardo correctamente nuevo personal");
		}});
	}


show = function(){
	personal.find({}, function(err, personal) {
  		if (err){
  			return console.log("Ocurrio un error al cargar el personal")
  		}
  		console.log(personal);
  		return json(personal);
	});
	}


delete = function(rutPersonal){
	User.find({ rut: rutPersonal }, function(err, personal) {
  		if (err){
  			return console.log("Ocurrio un error al  intentar eliminar el personal seleccionado");
  		}
	  	personal.remove(function(err) {
	    	if (err){
	    		return console.log("Ocurrio un error al eleminar el personal dentro del metodo remove")
	    	}

	    	console.log('User successfully deleted!');
  		});
	});
}
module.exports = mongoose.model('personal',personalSchema);