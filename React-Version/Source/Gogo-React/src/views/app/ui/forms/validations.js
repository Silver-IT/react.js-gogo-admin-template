import React from 'react';
import { Row } from 'reactstrap';
import IntlMessages from '../../../../helpers/IntlMessages';
import {
  Colxx,
  Separator,
} from '../../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../../containers/navs/Breadcrumb';

import FormikBasicFieldLevel from '../../../../containers/form-validations/FormikBasicFieldLevel';
import FormikBasicFormLevel from '../../../../containers/form-validations/FormikBasicFormLevel';
import FormikCustomComponents from '../../../../containers/form-validations/FormikCustomComponents';
import FormikCustomWithTopLabels from '../../../../containers/form-validations/FormikCustomWithTopLabels';
import AvailityBasic from '../../../../containers/form-validations/AvailityBasic';
import AvailityCustom from '../../../../containers/form-validations/AvailityCustom';
import AvailityDefaultValues from '../../../../containers/form-validations/AvailityDefaultValues';
import TooltipLocations from '../../../../containers/form-validations/TooltipLocations';
import FormikValidationSchema from '../../../../containers/form-validations/FormikValidationSchema';

const FormValidationsUi = ({ match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.form-validations" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xs="12" md="6" className="mb-3">
          <h5 className="mb-4">
            <IntlMessages id="forms.validation-formik" />
          </h5>
          <FormikBasicFieldLevel />
          <FormikBasicFormLevel />
          <FormikValidationSchema />
          <FormikCustomComponents />
          <FormikCustomWithTopLabels />
        </Colxx>
        <Colxx xs="12" md="6" className="mb-3">
          <h5 className="mb-4">
            <IntlMessages id="forms.validation-availity" />
          </h5>
          <AvailityBasic />
          <AvailityCustom />
          <AvailityDefaultValues />
        </Colxx>
      </Row>
      <Row>
        <Colxx xs="12">
          <h5 className="mb-4">Tooltip Positioning</h5>
          <TooltipLocations />
        </Colxx>
      </Row>
    </>
  );
};
export default FormValidationsUi;
