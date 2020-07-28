import React from 'react';

import { AvForm, AvField, AvGroup } from 'availity-reactstrap-validation';
import { Button, Label, Card, CardBody } from 'reactstrap';

const AvailityCustom = () => {
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
        <h6 className="mb-4">Custom Rules</h6>
        <AvForm
          className="av-tooltip tooltip-label-right"
          onSubmit={(event, errors, values) => onSubmit(event, errors, values)}
        >
          <AvGroup className="error-t-negative">
            <Label>Name</Label>
            <AvField
              name="nameCustomMessage"
              type="text"
              validate={{
                required: {
                  value: true,
                  errorMessage: 'Please enter your name',
                },
                pattern: {
                  value: '^[A-Za-z]+$',
                  errorMessage: 'Your name must be composed only with letters',
                },
                minLength: {
                  value: 2,
                  errorMessage: 'Your name must be between 2 and 16 characters',
                },
                maxLength: {
                  value: 16,
                  errorMessage: 'Your name must be between 2 and 16 characters',
                },
              }}
            />
          </AvGroup>

          <AvGroup className="error-t-negative">
            <Label>Email</Label>
            <AvField
              name="emailCustomMessage"
              type="email"
              validate={{
                required: {
                  value: true,
                  errorMessage: 'Please enter your email address',
                },
                email: {
                  value: true,
                  errorMessage: 'Please enter a valid email address',
                },
              }}
            />
          </AvGroup>

          <AvGroup className="error-l-100 error-t-negative">
            <Label>Email Again</Label>
            <AvField
              name="confirmationEmail"
              type="email"
              validate={{
                match: {
                  value: 'emailCustomMessage',
                  errorMessage: 'Your inputs does not match',
                },
                required: {
                  value: true,
                  errorMessage: 'Please enter your email address',
                },
              }}
            />
          </AvGroup>

          <AvGroup className="error-l-100 error-t-negative">
            <Label>Number</Label>
            <AvField
              name="numberProp"
              type="text"
              validate={{
                number: {
                  value: true,
                  errorMessage: 'Value must be a number',
                },
                required: {
                  value: true,
                  errorMessage: 'Please enter a number',
                },
              }}
            />
          </AvGroup>

          <AvGroup className="error-t-negative">
            <Label>Max</Label>
            <AvField
              name="maxPropNumberProp"
              type="text"
              validate={{
                max: { value: 5, errorMessage: 'Maximum 5' },
                required: {
                  value: true,
                  errorMessage: 'Please enter a number',
                },
              }}
            />
          </AvGroup>

          <AvGroup className="error-t-negative">
            <Label>Min</Label>
            <AvField
              name="minPropNumberProp"
              type="text"
              validate={{
                min: { value: 5, errorMessage: 'Minimum 5' },
                required: {
                  value: true,
                  errorMessage: 'Please enter a number',
                },
              }}
            />
          </AvGroup>

          <AvGroup className="error-l-125 error-t-negative">
            <Label>Regex (^[A-Z]*$)</Label>
            <AvField
              name="patternPropRegex"
              type="text"
              validate={{
                pattern: {
                  value: /^[A-Z]*$/,
                  errorMessage: 'Only uppercase characters',
                },
                required: {
                  value: true,
                  errorMessage: 'Please enter uppercase characters',
                },
              }}
            />
          </AvGroup>

          <Button color="primary">Submit</Button>
        </AvForm>
      </CardBody>
    </Card>
  );
};

export default AvailityCustom;
