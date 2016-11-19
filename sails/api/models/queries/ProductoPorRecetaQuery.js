module.exports = {
 
	getAllPPReceta: function (callback){
		ProductoPorRecetaQuery.query('select r.nombre as receta, p.nombre as  producto,pp.cantidadProducto as cantidad,p.unidadDeMedida from productoPorReceta as pp, producto as p, receta as r  where pp.recet=r.id and pp.product=p.id;', callback);
	},
	create: function (productosReceta,callback){
		ProductoPorRecetaQuery.create(productosReceta).exec(callback);
	}

}