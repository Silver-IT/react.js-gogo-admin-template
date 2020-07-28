/* eslint-disable no-unused-vars */
import React from 'react';
import { Formik, Form, Field } from 'formik';

import { Row, Card, CardBody, FormGroup, Label, Button } from 'reactstrap';
import { Colxx } from '../../components/common/CustomBootstrap';

const FormikBasicFormLevel = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Please enter your email address';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    if (!values.name) {
      errors.name = 'Please enter your name';
    } else if (values.name === 'admin') {
      errors.name = 'Value must be longer than 2 characters';
    }
    return errors;
  };

  return (
    <Row className="mb-4">
      <Colxx xxs="12">
        <Card>
          <CardBody>
            <h6 className="mb-4">Form Level Validation</h6>
            <Formik
              validate={validate}
              initialValues={{
                name: '',
                email: '',
              }}
              onSubmit={onSubmit}
            >
              {({ errors, touched, isValidating }) => (
                <Form className="av-tooltip tooltip-label-right">
                  <FormGroup>
                    <Label>Name</Label>
                    <Field className="form-control" name="name" />
                    {errors.name && touched.name && (
                      <div className="invalid-feedback d-block">
                        {errors.name}
                      </div>
                    )}
                  </FormGroup>

                  <FormGroup>
                    <Label>Email</Label>
                    <Field className="form-control" name="email" />
                    {errors.email && touched.email && (
                      <div className="invalid-feedback d-block">
                        {errors.email}
                      </div>
                    )}
                  </FormGroup>

                  <Button color="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          </CardBody>
        </Card>
      </Colxx>
    </Row>
  );
};

export default FormikBasicFormLevel;
