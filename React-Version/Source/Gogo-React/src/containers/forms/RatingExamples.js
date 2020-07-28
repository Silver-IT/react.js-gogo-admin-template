/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Row } from 'reactstrap';
import { Colxx } from '../../components/common/CustomBootstrap';
import IntlMessages from '../../helpers/IntlMessages';
import Rating from '../../components/common/Rating';

const RatingExamples = () => {
  return (
    <Row>
      <Colxx xxs="12" sm="6">
        <label>
          <IntlMessages id="form-components.interactive" />
        </label>
        <Rating total={5} rating={0} onRate={(rating) => {}} />
      </Colxx>
      <Colxx xxs="12" sm="6">
        <label>
          <IntlMessages id="form-components.readonly" />
        </label>
        <Rating total={5} rating={5} interactive={false} />
      </Colxx>
    </Row>
  );
};
export default RatingExamples;
