import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, findAll } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | schedule', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders a column for each person', async function (assert) {
    this.events = [];

    await render(hbs`<Schedule @events={{this.events}}/>`);

    // from the hardcoded staff members in the component
    assert.equal(findAll('td').length, 2);

    assert.ok(findAll('td')[0].textContent.includes('Hardcoded 1'));
    assert.ok(findAll('td')[1].textContent.includes('Hardcoded 2'));
  });
});
