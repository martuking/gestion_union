var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var personal = new Schema({
	
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
	porcentajeZona : Boolean,
	// documento acusete que le importa a la administracion, opcional
	fechaTerminoContrato : Date,
	// documento acusete que le importa a la administracion, opcional
	fechaTerminoDocumento : Date,
},
	{timestap : true});

module.exports = ModelClass;