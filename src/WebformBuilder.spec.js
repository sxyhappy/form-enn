import assert from 'power-assert';

import Harness from '../test/harness';
import WebformBuilder from './WebformBuilder';

describe('Formio Form Builder tests', () => {
  before((done) => Harness.builderBefore(done));
  after(() => Harness.builderAfter());
  it('Should create a new form builder class', (done) => {
    const builder = Harness.buildComponent('textfield');
    assert(builder instanceof WebformBuilder, 'Builder must be an instance of FormioFormBuilder');
    done();
  });
});
