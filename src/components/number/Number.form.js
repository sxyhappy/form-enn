import baseEditForm from '../base/Base.form';

import NumberEditData from './editForm/Number.edit.data';
import NumberEditValidation from './editForm/Number.edit.validation';

export default function(...extend) {
  return baseEditForm([
    {
      key: 'data',
      components: NumberEditData
    },
    {
      key: 'validation',
      components: NumberEditValidation
    }
  ], ...extend);
}
