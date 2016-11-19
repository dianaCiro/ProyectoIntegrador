
module.exports = {
 
	getAllReceta: function (callback){
		Receta.query('select * from receta', callback);
	},
	create: function (receta,callback){
		Receta.create(receta).exec(callback);
	}

}