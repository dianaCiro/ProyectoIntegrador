import DS from 'ember-data';

export default DS.Model.extend({
	nombre: DS.attr(),
	preparacion: DS.attr(),
	dificultad: DS.attr(),
	enfermedad: DS.attr(),
	etapa: DS.attr()
});
