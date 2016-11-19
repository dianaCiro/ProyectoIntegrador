var recetaQuery = require('../models/queries/RecetaQuery');

module.exports = {
	
	find : function(req,res){
		recetaQuery.getAllReceta(function(err, recetas) {
			if (err) return res.serverError(err);
			return res.json(recetas);
		});
	},
	create : function(req,res){

		var recetaObject={
			nombre : req.param('nombre'),
			preparacion : req.param('preparacion'),
			dificultad : req.param('dificultad'),
			enfermedad : req.param('enfermedad'),
			etapa : req.param('etapa'),
			imagen : req.param('imagen')
		}

		recetaQuery.create(recetaObject,function(err, recetas) {
			if (err) return res.serverError(err);
			return res.json(recetas);
		});
	}
	
};

