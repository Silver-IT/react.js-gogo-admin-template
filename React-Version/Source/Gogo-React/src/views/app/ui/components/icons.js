/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Row, Card, CardBody, CardTitle } from 'reactstrap';
import IntlMessages from '../../../../helpers/IntlMessages';

import {
  Colxx,
  Separator,
} from '../../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../../containers/navs/Breadcrumb';
import { iconsmind, simplelineicons } from '../../../../data/icons';

const IconGroup = ({ iconSet, setIndex }) => {
  return (
    <div className="mb-5">
      <h6 className="mb-4">{iconSet.title}</h6>
      {iconSet.icons.map((icon, index) => {
        return (
          <div className="glyph" key={setIndex + index}>
            <div className={`glyph-icon ${icon}`} />
            <div className="class-name">{icon}</div>
          </div>
        );
      })}
      <div className="clearfix" />
    </div>
  );
};

const IconsUi = ({ match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.icons" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12">
          <Card className="mb-4">
            <CardBody>
              <CardTitle>
                <IntlMessages id="icons.simplelineicons" /> (
                {simplelineicons.length} icons)
              </CardTitle>
              <div className="simple-line-icons">
                {simplelineicons.map((icon, index) => {
                  return (
                    <div className="glyph" key={index}>
                      <div className={`glyph-icon ${icon}`} />
                      <div className="class-name">{icon}</div>
                    </div>
                  );
                })}
              </div>
            </CardBody>
          </Card>

          <Card className="mb-4">
            <CardBody>
              <CardTitle>
                <IntlMessages id="icons.iconsmind" />
              </CardTitle>
              <div className="mind-icons">
                {iconsmind.map((iconSet, setIndex) => {
                  return (
                    <IconGroup
                      iconSet={iconSet}
                      setIndex={setIndex}
                      key={setIndex}
                    />
                  );
                })}
              </div>
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    </>
  );
};
export default IconsUi;
