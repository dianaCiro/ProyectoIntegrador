
module.exports = {
 
	getAll: function (callback){
		Producto.query('select * from producto', callback);
	},
	create: function (producto,callback){
		Producto.create(producto).exec(callback);
	}

}