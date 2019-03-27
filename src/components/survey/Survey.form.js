import baseEditForm from '../base/Base.form';

import SurveyEditDisplay from './editForm/Survey.edit.display';

export default function(...extend) {
  return baseEditForm([
    {
      key: 'display',
      components: SurveyEditDisplay
    }
  ], ...extend);
}
