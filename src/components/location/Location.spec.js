import Harness from '../../../test/harness';
import LocationComponent from './Location';

import {
  comp1
} from './fixtures';

describe('Location Component', function() {
  it('Should build a location component', function(done) {
    Harness.testCreate(LocationComponent, comp1).then(() => {
      done();
    });
  });
});
