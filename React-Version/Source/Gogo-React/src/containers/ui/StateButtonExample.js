/* eslint-disable no-unused-vars */
/* eslint-disable prefer-promise-reject-errors */
import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';

import IntlMessages from '../../helpers/IntlMessages';
import { Colxx } from '../../components/common/CustomBootstrap';

import StateButton from '../../components/StateButton';

const StateButtonExample = () => {
  const handleSuccessButtonClick = () => {
    return new Promise((success, fail) => {
      setTimeout(() => {
        success('Everything went right!');
      }, 2000);
    });
  };

  const handleFailButtonClick = () => {
    return new Promise((success, fail) => {
      setTimeout(() => {
        fail('Something is wrong!');
      }, 2000);
    });
  };

  return (
    <Colxx xxs="12" className="mb-4">
      <Card>
        <CardBody>
          <CardTitle>
            <IntlMessages id="button.states" />
          </CardTitle>
          <p className="mb-1">
            <IntlMessages id="button.states-text" />
          </p>
          <StateButton
            id="successButton"
            color="primary"
            className="mb-3"
            onClick={handleSuccessButtonClick}
          >
            <IntlMessages id="button.click-here" />
          </StateButton>
          <p className="mb-1">
            <IntlMessages id="button.states-text-alternate" />
          </p>
          <StateButton
            id="failButton"
            color="secondary"
            className="mb-3"
            onClick={handleFailButtonClick}
          >
            <IntlMessages id="button.click-here" />
          </StateButton>
        </CardBody>
      </Card>
    </Colxx>
  );
};
export default StateButtonExample;
