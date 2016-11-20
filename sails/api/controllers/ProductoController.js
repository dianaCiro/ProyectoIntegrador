var productoQuery = require('../models/queries/ProductoQuery');

module.exports = {
	
	find : function(req,res){
		productoQuery.getAll(function(err, productos) {
			if (err) return res.serverError(err);
			return res.json(productos);
		});
	},
	create : function(req,res){

		var productoObject={
			nombre : req.param('nombre'),
			unidadDeMedida : req.param('unidadDeMedida')
		}

		productoQuery.create(productoObject,function(err, productos) {
			if (err) return res.serverError(err);
			return res.json(productos);
		});
	}
	
};

