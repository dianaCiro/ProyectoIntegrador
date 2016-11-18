var recetaQuery = require('../models/queries/RecetaQuery');

module.exports = {
	
	find : function(req,res){
		recetaQuery.getAllReceta(function(err, recetas) {
			if (err) return res.serverError(err);
			return res.json(recetas);
		});
	}
	
};

