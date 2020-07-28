import React from 'react';
import {
  AvForm,
  AvField,
  AvGroup,
  AvInput,
  AvFeedback,
  AvRadioGroup,
  AvRadio,
  AvCheckboxGroup,
  AvCheckbox,
} from 'availity-reactstrap-validation';
import { Button, Label, Card, CardBody } from 'reactstrap';

const AvailityBasic = () => {
  const onSubmit = (event, errors, values) => {
    console.log(errors);
    console.log(values);
    if (errors.length === 0) {
      // submit
    }
  };

  return (
    <Card className="mb-5">
      <CardBody>
        <h6 className="mb-4">Basic</h6>
        <AvForm
          className="av-tooltip tooltip-label-right"
          onSubmit={(event, errors, values) => onSubmit(event, errors, values)}
        >
          <AvGroup>
            <Label>Name</Label>
            <AvInput name="name" required />
            <AvFeedback>Name is required!</AvFeedback>
          </AvGroup>

          <AvGroup>
            <Label>Rank</Label>
            <AvInput name="rank" required />
            <AvFeedback>This is an error!</AvFeedback>
          </AvGroup>

          <AvField
            type="select"
            name="select"
            required
            label="Option"
            errorMessage="Please select an option!"
          >
            <option value="0" />
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </AvField>

          <AvGroup>
            <Label>Details</Label>
            <AvInput type="textarea" name="details" id="details" required />
            <AvFeedback>Please enter some details!</AvFeedback>
          </AvGroup>

          <AvRadioGroup
            className="error-l-150"
            name="radioCustomInputExample"
            required
          >
            <Label className="d-block">Custom Radio Buttons</Label>
            <AvRadio customInput label="Cake" value="Cake" />
            <AvRadio customInput label="Cupcake" value="Cupcake" />
            <AvRadio customInput label="Dessert" value="Dessert" />
          </AvRadioGroup>

          <AvCheckboxGroup
            className="error-l-150"
            inline
            name="checkboxCustomInputExample2"
            required
          >
            <Label className="d-block">Custom Checkboxes</Label>
            <AvCheckbox customInput label="Yes" value="Yes" />
            <AvCheckbox customInput label="No" value="No" />
          </AvCheckboxGroup>
          <Button color="primary">Submit</Button>
        </AvForm>
      </CardBody>
    </Card>
  );
};

export default AvailityBasic;
