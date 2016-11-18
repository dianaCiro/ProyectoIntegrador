module.exports = {
  tableName: 'productoPorReceta',
  attributes: {
     recet : {
      type: 'integer',
      primaryKey: true,
      model: 'Receta'
    },

    product : {
      type: 'integer',
      model: 'Producto',
      primaryKey: true
    },

    cantidadProducto : {
      type: 'string',
      required: true
    }
  }
};

