
module.exports = {

 attributes: {
     id : {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
    },

    nombre : {
      type: 'string',
      required: true
    },

    unidadDeMedida : {
      type: 'string',
      required: true
    }
  }
};
