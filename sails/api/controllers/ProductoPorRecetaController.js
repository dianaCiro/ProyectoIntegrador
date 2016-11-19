var productoPorRecetaQuery = require('../models/queries/ProductoPorRecetaQuery');

module.exports = {
		
	find : function(req,res){
		productoPorRecetaQuery.getAllPPReceta(function(err, productosPorRecetas) {
			if (err) return res.serverError(err);
			return res.json(productosPorRecetas);
		});
	},
	create : function(req,res){

		var productosRecetaObject={
			recet : req.param('recet'),
			product : req.param('product'),
			cantidadProducto : req.param('cantidadProducto')
			
		}

		productoPorRecetaQuery.create(productosRecetaObject,function(err, productosReceta) {
			if (err) return res.serverError(err);
			return res.json(productosReceta);
		});
	}

};

