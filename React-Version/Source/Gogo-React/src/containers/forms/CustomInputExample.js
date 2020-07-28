import React from 'react';
import { FormGroup, Label, CustomInput, Form } from 'reactstrap';
import IntlMessages from '../../helpers/IntlMessages';

const CustomInputExample = () => {
  return (
    <Form>
      <FormGroup>
        <Label for="exCustomCheckbox">
          <IntlMessages id="form-components.checkboxes" />
        </Label>
        <div>
          <CustomInput
            type="checkbox"
            id="exCustomCheckbox"
            label="Check this custom checkbox"
          />
          <CustomInput
            type="checkbox"
            id="exCustomCheckbox2"
            label="Or this one"
          />
          <CustomInput
            type="checkbox"
            id="exCustomCheckbox3"
            label="But not this disabled one"
            disabled
          />
        </div>
      </FormGroup>
      <FormGroup>
        <Label for="exCustomRadio">
          <IntlMessages id="form-components.radios" />
        </Label>
        <div>
          <CustomInput
            type="radio"
            id="exCustomRadio"
            name="customRadio"
            label="Select this custom radio"
          />
          <CustomInput
            type="radio"
            id="exCustomRadio2"
            name="customRadio"
            label="Or this one"
          />
          <CustomInput
            type="radio"
            id="exCustomRadio3"
            label="But not this disabled one"
            disabled
          />
        </div>
      </FormGroup>
      <FormGroup>
        <Label for="exCustomInline">
          <IntlMessages id="form-components.inline" />
        </Label>
        <div>
          <CustomInput
            type="checkbox"
            id="exCustomInline"
            label="An inline custom input"
            inline
          />
          <CustomInput
            type="checkbox"
            id="exCustomInline2"
            label="and another one"
            inline
          />
        </div>
      </FormGroup>
    </Form>
  );
};

export default CustomInputExample;
