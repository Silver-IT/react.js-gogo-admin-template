import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { Colxx } from '../../components/common/CustomBootstrap';
import IntlMessages from '../../helpers/IntlMessages';

const FeatureComparison = () => {
  return (
    <>
      {/* Larger screen layout */}
      <Colxx xxs="12" className="d-none d-md-block">
        <Card className="mb-3 table-heading">
          <div className="d-flex flex-grow-1 min-width-zero">
            <CardBody className="align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
              <p className="list-item-heading mb-0 truncate w-40 w-xs-100" />
              <p className="mb-0 text-primary w-20 w-xs-100 text-center">
                <IntlMessages id="pages.price.developer" />
              </p>
              <p className="mb-0 text-primary w-20 w-xs-100 text-center">
                <IntlMessages id="pages.price.team" />
              </p>
              <p className="mb-0 text-primary w-20 w-xs-100 text-center">
                <IntlMessages id="pages.price.enterprise" />
              </p>
            </CardBody>
          </div>
        </Card>

        <Card className="flex flex-row mb-3">
          <div className="d-flex flex-grow-1 min-width-zero">
            <CardBody className="align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
              <p className="list-item-heading mb-0 truncate w-40 w-xs-100">
                <IntlMessages id="pages.price.twofactorauthentication" />
              </p>
              <p className="mb-0 text-primary w-20 w-xs-100 text-center">
                <i className="simple-icon-check" />
              </p>
              <p className="mb-0 text-primary w-20 w-xs-100 text-center">
                <i className="simple-icon-check" />
              </p>
              <p className="mb-0 text-primary w-20 w-xs-100 text-center">
                <i className="simple-icon-check" />
              </p>
            </CardBody>
          </div>
        </Card>
        <Card className="flex flex-row mb-3">
          <div className="d-flex flex-grow-1 min-width-zero">
            <CardBody className="align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
              <p className="list-item-heading mb-0 truncate w-40 w-xs-100">
                <IntlMessages id="pages.price.teampermissions" />
              </p>
              <p className="mb-0 text-primary w-20 w-xs-100 text-center" />
              <p className="mb-0 text-primary w-20 w-xs-100 text-center">
                <i className="simple-icon-check" />
              </p>
              <p className="mb-0 text-primary w-20 w-xs-100 text-center">
                <i className="simple-icon-check" />
              </p>
            </CardBody>
          </div>
        </Card>
        <Card className="flex flex-row mb-3">
          <div className="d-flex flex-grow-1 min-width-zero">
            <CardBody className="align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
              <p className="list-item-heading mb-0 truncate w-40 w-xs-100">
                <IntlMessages id="pages.price.245Support" />
              </p>
              <p className="mb-0 text-primary w-20 w-xs-100 text-center" />
              <p className="mb-0 text-primary w-20 w-xs-100 text-center">
                <i className="simple-icon-check" />
              </p>
              <p className="mb-0 text-primary w-20 w-xs-100 text-center" />
            </CardBody>
          </div>
        </Card>
        <Card className="flex flex-row mb-3">
          <div className="d-flex flex-grow-1 min-width-zero">
            <CardBody className="align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
              <p className="list-item-heading mb-0 truncate w-40 w-xs-100">
                <IntlMessages id="pages.price.247Support" />
              </p>
              <p className="mb-0 text-primary w-20 w-xs-100 text-center" />
              <p className="mb-0 text-primary w-20 w-xs-100 text-center" />
              <p className="mb-0 text-primary w-20 w-xs-100 text-center">
                <i className="simple-icon-check" />
              </p>
            </CardBody>
          </div>
        </Card>
        <Card className="flex flex-row mb-3">
          <div className="d-flex flex-grow-1 min-width-zero">
            <CardBody className="align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
              <p className="list-item-heading mb-0 truncate w-40 w-xs-100">
                <IntlMessages id="pages.price.useractionsauditlog" />
              </p>
              <p className="mb-0 text-primary w-20 w-xs-100 text-center" />
              <p className="mb-0 text-primary w-20 w-xs-100 text-center" />
              <p className="mb-0 text-primary w-20 w-xs-100 text-center">
                <i className="simple-icon-check" />
              </p>
            </CardBody>
          </div>
        </Card>
      </Colxx>

      {/* Smaller screen layout */}
      <Colxx xxs="12" className="d-block d-md-none">
        <Card className="d-flex flex-row mb-3 table-heading">
          <div className="d-flex flex-grow-1 min-width-zero">
            <CardBody className="pl-0 pb-0">
              <p className="list-item-heading mb-0 text-primary">
                <IntlMessages id="pages.price.twofactorauthentication" />
              </p>
            </CardBody>
          </div>
        </Card>
        <Card className="d-flex flex-row mb-3">
          <div className="d-flex flex-grow-1 min-width-zero">
            <CardBody className="align-self-center d-flex flex-row">
              <p className="list-item-heading mb-0 truncate w-70">
                <IntlMessages id="pages.price.developer" />
              </p>
              <p className="text-primary text-right mb-0 w-30 text-one">
                <i className="simple-icon-check" />
              </p>
            </CardBody>
          </div>
        </Card>
        <Card className="d-flex flex-row mb-3">
          <div className="d-flex flex-grow-1 min-width-zero">
            <CardBody className="align-self-center d-flex flex-row">
              <p className="list-item-heading mb-0 truncate w-70">
                <IntlMessages id="pages.price.team" />
              </p>
              <p className="text-primary text-right mb-0 w-30 text-one">
                <i className="simple-icon-check" />
              </p>
            </CardBody>
          </div>
        </Card>
        <Card className="d-flex flex-row mb-3">
          <div className="d-flex flex-grow-1 min-width-zero">
            <CardBody className="align-self-center d-flex flex-row">
              <p className="list-item-heading mb-0 truncate w-70">
                <IntlMessages id="pages.price.enterprise" />
              </p>
              <p className="text-primary text-right mb-0 w-30 text-one">
                <i className="simple-icon-check" />
              </p>
            </CardBody>
          </div>
        </Card>

        <Card className="d-flex flex-row mb-3 table-heading">
          <div className="d-flex flex-grow-1 min-width-zero">
            <CardBody className="pl-0 pb-0">
              <p className="list-item-heading mb-0 text-primary">
                <IntlMessages id="pages.price.teampermissions" />
              </p>
            </CardBody>
          </div>
        </Card>
        <Card className="d-flex flex-row mb-3">
          <div className="d-flex flex-grow-1 min-width-zero">
            <CardBody className="align-self-center d-flex flex-row">
              <p className="list-item-heading mb-0 truncate w-70">
                <IntlMessages id="pages.price.developer" />
              </p>
              <p className="text-primary text-right mb-0 w-30 text-one" />
            </CardBody>
          </div>
        </Card>

        <Card className="d-flex flex-row mb-3">
          <div className="d-flex flex-grow-1 min-width-zero">
            <CardBody className="align-self-center d-flex flex-row">
              <p className="list-item-heading mb-0 truncate w-70">
                <IntlMessages id="pages.price.team" />
              </p>
              <p className="text-primary text-right mb-0 w-30 text-one">
                <i className="simple-icon-check" />
              </p>
            </CardBody>
          </div>
        </Card>

        <Card className="d-flex flex-row mb-3">
          <div className="d-flex flex-grow-1 min-width-zero">
            <CardBody className="align-self-center d-flex flex-row">
              <p className="list-item-heading mb-0 truncate w-70">
                <IntlMessages id="pages.price.enterprise" />
              </p>
              <p className="text-primary text-right mb-0 w-30 text-one">
                <i className="simple-icon-check" />
              </p>
            </CardBody>
          </div>
        </Card>

        <Card className="d-flex flex-row mb-3 table-heading">
          <div className="d-flex flex-grow-1 min-width-zero">
            <CardBody className="pl-0 pb-0">
              <p className="list-item-heading mb-0 text-primary">
                <IntlMessages id="pages.price.245Support" />
              </p>
            </CardBody>
          </div>
        </Card>
        <Card className="d-flex flex-row mb-3">
          <div className="d-flex flex-grow-1 min-width-zero">
            <CardBody className="align-self-center d-flex flex-row">
              <p className="list-item-heading mb-0 truncate w-70">
                <IntlMessages id="pages.price.developer" />
              </p>
              <p className="text-primary text-right mb-0 w-30 text-one" />
            </CardBody>
          </div>
        </Card>
        <Card className="d-flex flex-row mb-3">
          <div className="d-flex flex-grow-1 min-width-zero">
            <CardBody className="align-self-center d-flex flex-row">
              <p className="list-item-heading mb-0 truncate w-70">
                <IntlMessages id="pages.price.team" />
              </p>
              <p className="text-primary text-right mb-0 w-30 text-one">
                <i className="simple-icon-check" />
              </p>
            </CardBody>
          </div>
        </Card>
        <Card className="d-flex flex-row mb-3">
          <div className="d-flex flex-grow-1 min-width-zero">
            <CardBody className="align-self-center d-flex flex-row">
              <p className="list-item-heading mb-0 truncate w-70">
                <IntlMessages id="pages.price.enterprise" />
              </p>
              <p className="text-primary text-right mb-0 w-30 text-one" />
            </CardBody>
          </div>
        </Card>

        <Card className="d-flex flex-row mb-3 table-heading">
          <div className="d-flex flex-grow-1 min-width-zero">
            <CardBody className="pl-0 pb-0">
              <p className="list-item-heading mb-0 text-primary">
                <IntlMessages id="pages.price.247Support" />
              </p>
            </CardBody>
          </div>
        </Card>
        <Card className="d-flex flex-row mb-3">
          <div className="d-flex flex-grow-1 min-width-zero">
            <CardBody className="align-self-center d-flex flex-row">
              <p className="list-item-heading mb-0 truncate w-70">
                <IntlMessages id="pages.price.developer" />
              </p>
              <p className="text-primary text-right mb-0 w-30 text-one" />
            </CardBody>
          </div>
        </Card>
        <Card className="d-flex flex-row mb-3">
          <div className="d-flex flex-grow-1 min-width-zero">
            <CardBody className="align-self-center d-flex flex-row">
              <p className="list-item-heading mb-0 truncate w-70">
                <IntlMessages id="pages.price.team" />
              </p>
              <p className="text-primary text-right mb-0 w-30 text-one" />
            </CardBody>
          </div>
        </Card>
        <Card className="d-flex flex-row mb-3">
          <div className="d-flex flex-grow-1 min-width-zero">
            <CardBody className="align-self-center d-flex flex-row">
              <p className="list-item-heading mb-0 truncate w-70">
                <IntlMessages id="pages.price.enterprise" />
              </p>
              <p className="text-primary text-right mb-0 w-30 text-one">
                <i className="simple-icon-check" />
              </p>
            </CardBody>
          </div>
        </Card>

        <Card className="d-flex flex-row mb-3 table-heading">
          <div className="d-flex flex-grow-1 min-width-zero">
            <CardBody className="pl-0 pb-0">
              <p className="list-item-heading mb-0 text-primary">
                <IntlMessages id="pages.price.useractionsauditlog" />
              </p>
            </CardBody>
          </div>
        </Card>
        <Card className="d-flex flex-row mb-3">
          <div className="d-flex flex-grow-1 min-width-zero">
            <CardBody className="align-self-center d-flex flex-row">
              <p className="list-item-heading mb-0 truncate w-70">
                <IntlMessages id="pages.price.developer" />
              </p>
              <p className="text-primary text-right mb-0 w-30 text-one" />
            </CardBody>
          </div>
        </Card>
        <Card className="d-flex flex-row mb-3">
          <div className="d-flex flex-grow-1 min-width-zero">
            <CardBody className="align-self-center d-flex flex-row">
              <p className="list-item-heading mb-0 truncate w-70">
                <IntlMessages id="pages.price.team" />
              </p>
              <p className="text-primary text-right mb-0 w-30 text-one" />
            </CardBody>
          </div>
        </Card>
        <Card className="d-flex flex-row mb-3">
          <div className="d-flex flex-grow-1 min-width-zero">
            <CardBody className="align-self-center d-flex flex-row">
              <p className="list-item-heading mb-0 truncate w-70">
                <IntlMessages id="pages.price.enterprise" />
              </p>
              <p className="text-primary text-right mb-0 w-30 text-one">
                <i className="simple-icon-check" />
              </p>
            </CardBody>
          </div>
        </Card>
      </Colxx>
    </>
  );
};

export default FeatureComparison;
