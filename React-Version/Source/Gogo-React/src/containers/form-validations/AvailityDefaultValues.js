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
import { Button, Label, FormGroup, Card, CardBody } from 'reactstrap';

const defaultValues = {
  locationType: 'work',
  locationQualities: ['beautiful', 'awesome', 'wonderful'],
  firstname: 'Sarah',
  lastname: 'Kortney',
  location: {
    street: '10752 Deerwood Park Blvd',
    suite: '110',
    city: 'Jacksonville',
    state: 'Florida',
    zip: '32256',
  },
};

const AvailityDefaultValues = () => {
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
        <h6 className="mb-4">Default Values</h6>

        <AvForm
          onSubmit={(event, errors, values) => onSubmit(event, errors, values)}
          model={defaultValues}
          className="av-tooltip tooltip-right-bottom"
        >
          <AvRadioGroup inline name="locationType" required>
            <Label className="d-block">Location Type</Label>
            <AvRadio label="Residential" value="home" />
            <AvRadio label="Business" value="work" />
            <AvRadio label="Awesome" value="awesome" />
          </AvRadioGroup>
          <AvCheckboxGroup inline name="locationQualities" required>
            <Label className="d-block">Location Qualities</Label>
            <AvCheckbox label="Beautiful" value="beautiful" />
            <AvCheckbox label="Awesome" value="awesome" />
            <AvCheckbox label="Wonderful" value="wonderful" />
          </AvCheckboxGroup>

          <AvField name="firstname" label="First Name" required />
          <AvField name="lastname" label="Last Name" required />
          <AvGroup>
            <Label for="street">Street</Label>
            <AvInput name="location.street" id="street" required />
            <AvFeedback>This is an error!</AvFeedback>
          </AvGroup>

          <AvField name="location.suite" label="Suite" required />
          <AvField name="location.city" label="City" required />

          <AvField type="select" name="location.state" label="State" required>
            <option>Something</option>
            <option>Something else</option>
            <option>Florida</option>
          </AvField>

          <AvField name="location.zip" label="ZIP Code" required />

          <FormGroup className="mb-0">
            <Button color="primary">Submit</Button>
          </FormGroup>
        </AvForm>
      </CardBody>
    </Card>
  );
};

export default AvailityDefaultValues;
