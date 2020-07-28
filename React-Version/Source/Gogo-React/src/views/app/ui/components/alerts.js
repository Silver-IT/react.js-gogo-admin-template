import React, { useState } from 'react';
import {
  Alert,
  UncontrolledAlert,
  Row,
  Card,
  CardBody,
  CardTitle,
} from 'reactstrap';
import IntlMessages from '../../../../helpers/IntlMessages';
import {
  Colxx,
  Separator,
} from '../../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../../containers/navs/Breadcrumb';
import NotificationExamples from '../../../../containers/ui/NotificationExamples';

const AlertsUi = ({ match }) => {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.alerts" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-4">
          <NotificationExamples />
        </Colxx>

        <Colxx xxs="12" className="mb-4">
          <Card>
            <CardBody>
              <CardTitle>
                <IntlMessages id="alert.rounded" />
              </CardTitle>
              <Alert color="primary" className="rounded">
                <IntlMessages id="alert.primary-text" />
              </Alert>
              <Alert color="secondary" className="rounded">
                <IntlMessages id="alert.secondary-text" />
              </Alert>
              <Alert color="success" className="rounded">
                <IntlMessages id="alert.success-text" />
              </Alert>
              <Alert color="danger" className="rounded">
                <IntlMessages id="alert.danger-text" />
              </Alert>
              <Alert color="warning" className="rounded">
                <IntlMessages id="alert.warning-text" />
              </Alert>
              <Alert color="info" className="rounded">
                <IntlMessages id="alert.info-text" />
              </Alert>
              <Alert color="light" className="rounded">
                <IntlMessages id="alert.light-text" />
              </Alert>
              <Alert color="dark" className="rounded">
                <IntlMessages id="alert.dark-text" />
              </Alert>
            </CardBody>
          </Card>
        </Colxx>

        <Colxx xxs="12" className="mb-4">
          <Card>
            <CardBody>
              <CardTitle>
                <IntlMessages id="alert.default" />
              </CardTitle>
              <Alert color="primary">
                <IntlMessages id="alert.primary-text" />
              </Alert>
              <Alert color="secondary">
                <IntlMessages id="alert.secondary-text" />
              </Alert>
              <Alert color="success">
                <IntlMessages id="alert.success-text" />
              </Alert>
              <Alert color="danger">
                <IntlMessages id="alert.danger-text" />
              </Alert>
              <Alert color="warning">
                <IntlMessages id="alert.warning-text" />
              </Alert>
              <Alert color="info">
                <IntlMessages id="alert.info-text" />
              </Alert>
              <Alert color="light">
                <IntlMessages id="alert.light-text" />
              </Alert>
              <Alert color="dark">
                <IntlMessages id="alert.dark-text" />
              </Alert>
            </CardBody>
          </Card>
        </Colxx>

        <Colxx xxs="12" className="mb-4">
          <Card>
            <CardBody>
              <CardTitle>
                <IntlMessages id="alert.dismissing" />
              </CardTitle>
              <Alert
                color="warning"
                className="rounded"
                isOpen={visible}
                toggle={() => setVisible(!visible)}
              >
                <IntlMessages id="alert.dismissing-text" />
              </Alert>
              <UncontrolledAlert color="warning" fade={false}>
                <IntlMessages id="alert.dismissing-without-animate-text" />
              </UncontrolledAlert>
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    </>
  );
};
export default AlertsUi;
