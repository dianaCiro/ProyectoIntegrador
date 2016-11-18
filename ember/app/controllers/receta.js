import Ember from 'ember';

var recetaController = Ember.Controller.extend({

  actions: {

    new: function() {
      console.log('creating new receta...');

      var receta = {
        name: this.get('name'),
        preparacion: this.get('preparacion'),
        dificultad: this.get('dificultad'),
        enfermedad: this.get('enfermedad'),
        etapa: this.get('etapa'),
        imagen: this.get('imagen')
      };

      console.log(receta);

    }
  }


});
export default recetaController;
