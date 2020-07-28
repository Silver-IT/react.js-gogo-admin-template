import React, { useRef } from 'react';
import { Row, Card, CardBody, CardTitle } from 'reactstrap';

import IntlMessages from '../../../../helpers/IntlMessages';
import {
  Colxx,
  Separator,
} from '../../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../../containers/navs/Breadcrumb';

import CustomInputExample from '../../../../containers/forms/CustomInputExample';
import ReactSelectExample from '../../../../containers/forms/ReactSelectExample';
import ReactAutoSugegstExample from '../../../../containers/forms/ReactAutoSugegstExample';
import DatePickerExamples from '../../../../containers/forms/DatePickerExamples';
import DropzoneExample from '../../../../containers/forms/DropzoneExample';
import TagsInputExample from '../../../../containers/forms/TagsInputExample';
import SwitchExamples from '../../../../containers/forms/SwitchExamples';
import SliderExamples from '../../../../containers/forms/SliderExamples';
import RatingExamples from '../../../../containers/forms/RatingExamples';

const ComponentsUi = ({ match }) => {
  const dropzone = useRef();
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.form-components" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row className="mb-4">
        <Colxx xxs="12">
          <Card>
            <CardBody>
              <CardTitle>
                <IntlMessages id="form-components.custom-inputs" />
              </CardTitle>
              <CustomInputExample />
            </CardBody>
          </Card>
        </Colxx>
      </Row>

      <Row className="mb-4">
        <Colxx xxs="12">
          <Card>
            <CardBody>
              <CardTitle>
                <IntlMessages id="form-components.react-select" />
              </CardTitle>
              <ReactSelectExample />
            </CardBody>
          </Card>
        </Colxx>
      </Row>

      <Row className="mb-4">
        <Colxx xxs="12">
          <Card>
            <CardBody>
              <CardTitle>
                <IntlMessages id="form-components.react-autosuggest" />
              </CardTitle>
              <Row className="mb-4">
                <Colxx xxs="12" sm="6">
                  <ReactAutoSugegstExample />
                </Colxx>
              </Row>
            </CardBody>
          </Card>
        </Colxx>
      </Row>
      <DatePickerExamples />
      <Row className="mb-4">
        <Colxx xxs="12">
          <Card>
            <CardBody>
              <CardTitle>
                <IntlMessages id="form-components.dropzone" />
              </CardTitle>
              <DropzoneExample ref={dropzone} />
            </CardBody>
          </Card>
        </Colxx>
      </Row>

      <Row className="mb-4">
        <Colxx xxs="12">
          <Card>
            <CardBody>
              <CardTitle>
                <IntlMessages id="form-components.tags" />
              </CardTitle>
              <TagsInputExample />
            </CardBody>
          </Card>
        </Colxx>
      </Row>

      <Row className="mb-4">
        <Colxx xxs="12">
          <SwitchExamples />
        </Colxx>
      </Row>

      <Row className="mb-4">
        <Colxx xxs="12">
          <Card>
            <CardBody>
              <CardTitle>
                <IntlMessages id="form-components.slider" />
              </CardTitle>
              <SliderExamples />
            </CardBody>
          </Card>
        </Colxx>
      </Row>

      <Row className="mb-4">
        <Colxx xxs="12">
          <Card>
            <CardBody>
              <CardTitle>
                <IntlMessages id="form-components.rating" />
              </CardTitle>
              <RatingExamples />
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    </>
  );
};
export default ComponentsUi;
