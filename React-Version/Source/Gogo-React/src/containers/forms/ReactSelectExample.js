/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Row } from 'reactstrap';
import Select from 'react-select';
import IntlMessages from '../../helpers/IntlMessages';
import CustomSelectInput from '../../components/common/CustomSelectInput';
import { Colxx } from '../../components/common/CustomBootstrap';

const selectData = [
  { label: 'Cake', value: 'cake', key: 0 },
  { label: 'Cupcake', value: 'cupcake', key: 1 },
  { label: 'Dessert', value: 'dessert', key: 2 },
];

const ReactSelectExample = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);

  return (
    <Row>
      <Colxx xxs="12" md="6" className="mb-5">
        <label>
          <IntlMessages id="form-components.state-single" />
        </label>
        <Select
          components={{ Input: CustomSelectInput }}
          className="react-select"
          classNamePrefix="react-select"
          name="form-field-name"
          value={selectedOption}
          onChange={setSelectedOption}
          options={selectData}
        />
      </Colxx>
      <Colxx xxs="12" md="6">
        <label>
          <IntlMessages id="form-components.state-multiple" />
        </label>
        <Select
          components={{ Input: CustomSelectInput }}
          className="react-select"
          classNamePrefix="react-select"
          isMulti
          name="form-field-name"
          value={selectedOptions}
          onChange={setSelectedOptions}
          options={selectData}
        />
      </Colxx>
    </Row>
  );
};
export default ReactSelectExample;
