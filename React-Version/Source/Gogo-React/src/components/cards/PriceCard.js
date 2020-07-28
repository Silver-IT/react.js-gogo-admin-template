/* eslint-disable react/no-array-index-key */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card, CardBody } from 'reactstrap';
import IntlMessages from '../../helpers/IntlMessages';

const PriceCard = ({ data }) => {
  return (
    <Card>
      <CardBody className="pt-5 pb-5 d-flex flex-lg-column flex-md-row flex-sm-row flex-column">
        <div className="price-top-part">
          <i className={`large-icon ${data.icon}`} />
          <h5 className="mb-0 font-weight-semibold color-theme-1 mb-4">
            {data.title}
          </h5>
          <p className="text-large mb-2 text-default">{data.price}</p>
          <p className="text-muted text-small">{data.detail}</p>
        </div>
        <div className="pl-3 pr-3 pt-3 pb-0 d-flex price-feature-list flex-column flex-grow-1">
          <ul className="list-unstyled">
            {data.features.map((feature, index) => {
              return (
                <li key={index}>
                  <p className="mb-0">{feature}</p>
                </li>
              );
            })}
          </ul>
          <div className="text-center">
            <NavLink to={data.link} className="btn btn-link btn-empty btn-lg">
              <IntlMessages id="pages.purchase" />{' '}
              <i className="simple-icon-arrow-right" />
            </NavLink>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default React.memo(PriceCard);
