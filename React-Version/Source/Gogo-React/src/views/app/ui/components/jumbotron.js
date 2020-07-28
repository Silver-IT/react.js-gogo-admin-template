import React from 'react';
import { Row, Card, CardBody, Jumbotron, Button } from 'reactstrap';
import IntlMessages from '../../../../helpers/IntlMessages';
import {
  Colxx,
  Separator,
} from '../../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../../containers/navs/Breadcrumb';

const JumbotronUi = ({ match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.jumbotron" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-4">
          <Card>
            <CardBody>
              <Jumbotron>
                <h1 className="display-4">
                  <IntlMessages id="jumbotron.hello-world" />
                </h1>
                <p className="lead">
                  <IntlMessages id="jumbotron.lead" />
                </p>
                <hr className="my-4" />
                <p>
                  <IntlMessages id="jumbotron.lead-detail" />
                </p>
                <p className="lead mb-0">
                  <Button color="primary" size="lg">
                    <IntlMessages id="jumbotron.learn-more" />
                  </Button>
                </p>
              </Jumbotron>
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    </>
  );
};
export default JumbotronUi;
