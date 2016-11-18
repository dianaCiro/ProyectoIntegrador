import {
  test
} from 'qunit';
import moduleForAcceptance from 'prueba/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | receta');

test('visiting /crearReceta', function(assert) {
  visit('/crearReceta');

  andThen(function() {
    assert.equal(currentURL(), '/crearReceta');
  });
});
