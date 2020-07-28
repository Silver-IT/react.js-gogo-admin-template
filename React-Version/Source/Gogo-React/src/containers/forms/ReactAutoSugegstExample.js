import React, { useState } from 'react';
import { injectIntl } from 'react-intl';
import ReactAutoSuggest from '../../components/common/ReactAutoSuggest';
import cakes from '../../data/cakes';

const data = cakes.map((item) => {
  return { name: item.title };
});

const ReactAutoSugegstExample = ({ intl }) => {
  const [value, setValue] = useState('');
  const { messages } = intl;

  return (
    <ReactAutoSuggest
      placeholder={messages['form-components.type-a-cake']}
      value={value}
      onChange={(val) => setValue(val)}
      data={data}
    />
  );
};

export default injectIntl(ReactAutoSugegstExample);
