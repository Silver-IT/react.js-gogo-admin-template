/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Card, CardBody, CardTitle, Row } from 'reactstrap';
import Switch from 'rc-switch';
import 'rc-switch/assets/index.css';

import IntlMessages from '../../helpers/IntlMessages';
import { Colxx } from '../../components/common/CustomBootstrap';

const SwitchExamples = () => {
  const [checkedPrimary, setCheckedPrimary] = useState(false);
  const [checkedSecondary, setCheckedSecondary] = useState(true);
  const [checkedPrimaryInverse, setCheckedPrimaryInverse] = useState(true);
  const [checkedSecondaryInverse, setCheckedSecondaryInverse] = useState(false);

  const [checkedPrimarySmall, setCheckedPrimarySmall] = useState(false);
  const [checkedSecondarySmall, setCheckedSecondarySmall] = useState(true);
  const [checkedPrimaryInverseSmall, setCheckedPrimaryInverseSmall] = useState(true);
  const [checkedSecondaryInverseSmall, setCheckedSecondaryInverseSmall] = useState(false);

  return (
    <Card>
      <CardBody>
        <CardTitle>
          <IntlMessages id="form-components.switch" />
        </CardTitle>
        <Row className="mb-4">
          <Colxx xxs="6">
            <label>
              <IntlMessages id="form-components.primary" />
            </label>
            <Switch
              className="custom-switch custom-switch-primary"
              checked={checkedPrimary}
              onChange={(primary) => setCheckedPrimary(primary)}
            />
          </Colxx>

          <Colxx xxs="6">
            <label>
              <IntlMessages id="form-components.secondary" />
            </label>
            <Switch
              className="custom-switch custom-switch-secondary"
              checked={checkedSecondary}
              onChange={(secondary) => setCheckedSecondary(secondary)}
            />
          </Colxx>
        </Row>

        <Row className="mb-4">
          <Colxx xxs="6">
            <label>
              <IntlMessages id="form-components.primary-inverse" />
            </label>
            <Switch
              className="custom-switch custom-switch-primary-inverse"
              checked={checkedPrimaryInverse}
              onChange={(primaryInverse) =>
                setCheckedPrimaryInverse(primaryInverse)
              }
            />
          </Colxx>

          <Colxx xxs="6">
            <label>
              <IntlMessages id="form-components.secondary-inverse" />
            </label>
            <Switch
              className="custom-switch custom-switch-secondary-inverse"
              checked={checkedSecondaryInverse}
              onChange={(secondaryInverse) =>
                setCheckedSecondaryInverse(secondaryInverse)
              }
            />
          </Colxx>
        </Row>

        <Row className="mb-4">
          <Colxx xxs="6">
            <label>
              <IntlMessages id="form-components.primary" />
            </label>
            <Switch
              className="custom-switch custom-switch-primary custom-switch-small"
              checked={checkedPrimarySmall}
              onChange={(primary) => setCheckedPrimarySmall(primary)}
            />
          </Colxx>

          <Colxx xxs="6">
            <label>
              <IntlMessages id="form-components.secondary" />
            </label>
            <Switch
              className="custom-switch custom-switch-secondary custom-switch-small"
              checked={checkedSecondarySmall}
              onChange={(secondary) => setCheckedSecondarySmall(secondary)}
            />
          </Colxx>
        </Row>

        <Row className="mb-4">
          <Colxx xxs="6">
            <label>
              <IntlMessages id="form-components.primary-inverse" />
            </label>
            <Switch
              className="custom-switch custom-switch-primary-inverse custom-switch-small"
              checked={checkedPrimaryInverseSmall}
              onChange={(primaryInverse) =>
                setCheckedPrimaryInverseSmall(primaryInverse)
              }
            />
          </Colxx>

          <Colxx xxs="6">
            <label>
              <IntlMessages id="form-components.secondary-inverse" />
            </label>
            <Switch
              className="custom-switch custom-switch-secondary-inverse custom-switch-small"
              checked={checkedSecondaryInverseSmall}
              onChange={(secondaryInverse) =>
                setCheckedSecondaryInverseSmall(secondaryInverse)
              }
            />
          </Colxx>
        </Row>

      </CardBody>
    </Card>
  );
};
export default SwitchExamples;
