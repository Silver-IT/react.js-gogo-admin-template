/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Row, Card, CardBody, FormGroup, Label, Button } from 'reactstrap';
import {
  FormikReactSelect,
  FormikCheckboxGroup,
  FormikCheckbox,
  FormikRadioButtonGroup,
  FormikCustomCheckbox,
  FormikCustomCheckboxGroup,
  FormikCustomRadioGroup,
  FormikTagsInput,
  FormikSwitch,
  FormikDatePicker,
} from './FormikFields';
import { Colxx } from '../../components/common/CustomBootstrap';
import IntlMessages from '../../helpers/IntlMessages';

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required!'),
  select: Yup.string().required('A select option is required!'),
  reactSelect: Yup.array()
    .min(3, 'Pick at least 3 tags')
    .of(
      Yup.object().shape({
        label: Yup.string().required(),
        value: Yup.string().required(),
      })
    ),
  checkboxSingle: Yup.bool().oneOf([true], 'Must agree to something'),
  checkboxCustomSingle: Yup.bool().oneOf([true], 'Must agree to something'),
  checkboxGroup: Yup.array()
    .min(2, 'Pick at least 2 tags')
    .required('At least one checkbox is required'),

  customCheckGroup: Yup.array()
    .min(2, 'Pick at least 2 tags')
    .required('At least one checkbox is required'),

  radioGroup: Yup.string().required('A radio option is required'),
  customRadioGroup: Yup.string().required('A radio option is required'),
  tags: Yup.array()
    .min(3, 'Pick at least 3 tags')
    .required('At least one checkbox is required'),
  switch: Yup.bool().oneOf([true], 'Must agree to something'),
  date: Yup.date().nullable().required('Date required'),
});

const options = [
  { value: 'food', label: 'Food' },
  { value: 'beingfabulous', label: 'Being Fabulous', disabled: true },
  { value: 'reasonml', label: 'ReasonML' },
  { value: 'unicorns', label: 'Unicorns' },
  { value: 'kittens', label: 'Kittens' },
];

const FormikCustomComponents = () => {
  const onSubmit = (values, { setSubmitting }) => {
    const payload = {
      ...values,
      reactSelect: values.reactSelect.map((t) => t.value),
    };
    setTimeout(() => {
      console.log(JSON.stringify(payload, null, 2));
      setSubmitting(false);
    }, 1000);
  };

  return (
    <Row className="mb-4">
      <Colxx xxs="12">
        <Card>
          <CardBody>
            <h6 className="mb-4">Custom Components and Layouts with Yup</h6>
            <Formik
              initialValues={{
                email: 'test@test.com',
                select: '3',
                reactSelect: [{ value: 'reasonml', label: 'ReasonML' }],
                checkboxGroup: ['kittens'],
                customCheckGroup: ['unicorns'],
                checkboxSingle: true,
                checkboxCustomSingle: false,
                radioGroup: '',
                customRadioGroup: '',
                tags: ['cake', 'dessert'],
                switch: false,
                date: null,
              }}
              validationSchema={SignupSchema}
              onSubmit={onSubmit}
            >
              {({
                handleSubmit,
                setFieldValue,
                setFieldTouched,
                handleChange,
                handleBlur,
                values,
                errors,
                touched,
                isSubmitting,
              }) => (
                <Form className="av-tooltip tooltip-label-right">
                  <FormGroup className="error-l-100">
                    <Label>
                      <IntlMessages id="forms.email" />
                    </Label>
                    <Field className="form-control" name="email" />
                    {errors.email && touched.email ? (
                      <div className="invalid-feedback d-block">
                        {errors.email}
                      </div>
                    ) : null}
                  </FormGroup>
                  <FormGroup className="error-l-100">
                    <Label>Select </Label>
                    <select
                      name="select"
                      className="form-control"
                      value={values.select}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option value="">Select an option..</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>

                    {errors.select && touched.select ? (
                      <div className="invalid-feedback d-block">
                        {errors.select}
                      </div>
                    ) : null}
                  </FormGroup>

                  <FormGroup className="error-l-100">
                    <Label>React Select </Label>
                    <FormikReactSelect
                      name="reactSelect"
                      id="reactSelect"
                      value={values.reactSelect}
                      isMulti
                      options={options}
                      onChange={setFieldValue}
                      onBlur={setFieldTouched}
                    />
                    {errors.reactSelect && touched.reactSelect ? (
                      <div className="invalid-feedback d-block">
                        {errors.reactSelect}
                      </div>
                    ) : null}
                  </FormGroup>
                  <FormGroup className="error-l-150">
                    <Label className="d-block">Single Checkbox </Label>
                    <FormikCheckbox
                      name="checkboxSingle"
                      value={values.checkboxSingle}
                      label="Agree to something"
                      onChange={setFieldValue}
                      onBlur={setFieldTouched}
                    />
                    {errors.checkboxSingle && touched.checkboxSingle ? (
                      <div className="invalid-feedback d-block">
                        {errors.checkboxSingle}
                      </div>
                    ) : null}
                  </FormGroup>
                  <FormGroup className="error-l-150">
                    <Label className="d-block">Custom Single Checkbox </Label>
                    <FormikCustomCheckbox
                      name="checkboxCustomSingle"
                      value={values.checkboxCustomSingle}
                      label="Agree to something"
                      onChange={setFieldValue}
                      onBlur={setFieldTouched}
                    />
                    {errors.checkboxCustomSingle &&
                    touched.checkboxCustomSingle ? (
                      <div className="invalid-feedback d-block">
                        {errors.checkboxCustomSingle}
                      </div>
                    ) : null}
                  </FormGroup>
                  <FormGroup className="error-l-150 ">
                    <Label className="d-block">Checkbox Group</Label>
                    <FormikCheckboxGroup
                      inline
                      name="checkboxGroup"
                      id="checkboxGroup"
                      label="Which of these?"
                      value={values.checkboxGroup}
                      onChange={setFieldValue}
                      onBlur={setFieldTouched}
                      options={options}
                    />
                    {errors.checkboxGroup && touched.checkboxGroup ? (
                      <div className="invalid-feedback d-block">
                        {errors.checkboxGroup}
                      </div>
                    ) : null}
                  </FormGroup>
                  <FormGroup className="error-l-175 ">
                    <Label className="d-block">Custom Checkbox Group</Label>
                    <FormikCustomCheckboxGroup
                      inline
                      name="customCheckGroup"
                      id="customCheckGroup"
                      label="Which of these?"
                      value={values.customCheckGroup}
                      onChange={setFieldValue}
                      onBlur={setFieldTouched}
                      options={options}
                    />
                    {errors.customCheckGroup && touched.customCheckGroup ? (
                      <div className="invalid-feedback d-block">
                        {errors.customCheckGroup}
                      </div>
                    ) : null}
                  </FormGroup>

                  <FormGroup className="error-l-150">
                    <Label className="d-block">Radio Group </Label>
                    <FormikRadioButtonGroup
                      inline
                      name="radioGroup"
                      id="radioGroup"
                      label="One of these please"
                      value={values.radioGroup}
                      onChange={setFieldValue}
                      onBlur={setFieldTouched}
                      options={options}
                    />
                    {errors.radioGroup && touched.radioGroup ? (
                      <div className="invalid-feedback d-block">
                        {errors.radioGroup}
                      </div>
                    ) : null}
                  </FormGroup>
                  <FormGroup className="error-l-175">
                    <Label className="d-block">Custom Radio Group</Label>
                    <FormikCustomRadioGroup
                      inline
                      name="customRadioGroup"
                      id="customRadioGroup"
                      label="Which of these?"
                      value={values.customRadioGroup}
                      onChange={setFieldValue}
                      onBlur={setFieldTouched}
                      options={options}
                    />
                    {errors.customRadioGroup && touched.customRadioGroup ? (
                      <div className="invalid-feedback d-block">
                        {errors.customRadioGroup}
                      </div>
                    ) : null}
                  </FormGroup>

                  <FormGroup className="error-l-175">
                    <Label className="d-block">
                      <IntlMessages id="form-components.tags" />
                    </Label>

                    <FormikTagsInput
                      name="tags"
                      value={values.tags}
                      onChange={setFieldValue}
                      onBlur={setFieldTouched}
                    />

                    {errors.tags && touched.tags ? (
                      <div className="invalid-feedback d-block">
                        {errors.tags}
                      </div>
                    ) : null}
                  </FormGroup>

                  <FormGroup className="error-l-100">
                    <Label className="d-block">
                      <IntlMessages id="form-components.switch" />
                    </Label>
                    <FormikSwitch
                      name="switch"
                      className="custom-switch custom-switch-primary"
                      value={values.switch}
                      onChange={setFieldValue}
                      onBlur={setFieldTouched}
                    />
                    {errors.switch && touched.switch ? (
                      <div className="invalid-feedback d-block">
                        {errors.switch}
                      </div>
                    ) : null}
                  </FormGroup>

                  <FormGroup className="error-l-100">
                    <Label className="d-block">
                      <IntlMessages id="form-components.date-picker" />
                    </Label>
                    <FormikDatePicker
                      name="date"
                      value={values.date}
                      onChange={setFieldValue}
                      onBlur={setFieldTouched}
                    />
                    {errors.date && touched.date ? (
                      <div className="invalid-feedback d-block">
                        {errors.date}
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
export default FormikCustomComponents;
