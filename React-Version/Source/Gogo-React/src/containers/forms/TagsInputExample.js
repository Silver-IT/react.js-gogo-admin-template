import React, { useState } from 'react';
import { injectIntl } from 'react-intl';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';

const TagsInputExample = ({ intl }) => {
  const [tags, setTags] = useState([]);
  const { messages } = intl;

  return (
    <TagsInput
      value={tags}
      onChange={setTags}
      inputProps={{ placeholder: messages['form-components.tags'] }}
    />
  );
};
export default injectIntl(TagsInputExample);
