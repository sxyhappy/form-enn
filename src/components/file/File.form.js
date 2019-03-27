import baseEditForm from '../base/Base.form';

import FileEditFile from './editForm/File.edit.file';

export default function(...extend) {
  return baseEditForm([
    {
      label: 'File',
      key: 'file',
      weight: 5,
      components: FileEditFile
    }
  ], ...extend);
}
