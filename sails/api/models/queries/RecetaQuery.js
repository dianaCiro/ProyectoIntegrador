
module.exports = {
 
	getAllReceta: function (callback){
		Receta.query('select * from receta', callback);
	}

}