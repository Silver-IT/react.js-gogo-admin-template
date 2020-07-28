/* eslint-disable no-unused-vars */
import React from 'react';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { Row, Card, CardBody, FormGroup, Label, Button } from 'reactstrap';
import { Colxx } from '../../components/common/CustomBootstrap';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Please enter your first name'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Please enter your last name'),
  email: Yup.string()
    .email('Invalid email')
    .required('Please enter your email address'),
  details: Yup.string().required('Please provide the details'),
});

const FormikValidationSchema = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Row className="mb-4">
      <Colxx xxs="12">
        <Card>
          <CardBody>
            <h6 className="mb-4">Validation Schema with Yup</h6>

            <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                details: '',
              }}
              validationSchema={SignupSchema}
              onSubmit={onSubmit}
            >
              {({
                handleSubmit,
                setFieldValue,
                setFieldTouched,
                values,
                errors,
                touched,
                isSubmitting,
              }) => (
                <Form className="av-tooltip tooltip-label-right">
                  <FormGroup className="error-l-75">
                    <Label>First Name</Label>
                    <Field className="form-control" name="firstName" />
                    {errors.firstName && touched.firstName ? (
                      <div className="invalid-feedback d-block">
                        {errors.firstName}
                      </div>
                    ) : null}
                  </FormGroup>

                  <FormGroup className="error-l-75">
                    <Label>Last Name</Label>
                    <Field className="form-control" name="lastName" />
                    {errors.lastName && touched.lastName ? (
                      <div className="invalid-feedback d-block">
                        {errors.lastName}
                      </div>
                    ) : null}
                  </FormGroup>

                  <FormGroup>
                    <Label>Email</Label>
                    <Field className="form-control" name="email" type="email" />
                    {errors.email && touched.email ? (
                      <div className="invalid-feedback d-block">
                        {errors.email}
                      </div>
                    ) : null}
                  </FormGroup>

                  <FormGroup>
                    <Label>Details</Label>
                    <Field
                      className="form-control"
                      name="details"
                      component="textarea"
                    />
                    {errors.details && touched.details ? (
                      <div className="invalid-feedback d-block">
                        {errors.details}
                      </div>
                    ) : null}
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

export default FormikValidationSchema;
