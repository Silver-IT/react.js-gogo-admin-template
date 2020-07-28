/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import { Row } from 'reactstrap';
import { Colxx } from '../../components/common/CustomBootstrap';
import IntlMessages from '../../helpers/IntlMessages';

import {
  SliderTooltip,
  RangeTooltip,
} from '../../components/common/SliderTooltips';

const SliderExamples = () => {
  return (
    <Row>
      <Colxx xxs="12" sm="6">
        <label>
          <IntlMessages id="form-components.double-slider" />
        </label>
        <RangeTooltip
          min={500}
          max={1500}
          className="mb-5"
          defaultValue={[800, 1200]}
          allowCross={false}
          pushable={100}
        />
      </Colxx>

      <Colxx xxs="12" sm="6">
        <label>
          <IntlMessages id="form-components.single-slider" />
        </label>
        <SliderTooltip
          min={0}
          max={2500}
          defaultValue={1000}
          className="mb-5"
          step={500}
        />
      </Colxx>
    </Row>
  );
};

export default SliderExamples;
