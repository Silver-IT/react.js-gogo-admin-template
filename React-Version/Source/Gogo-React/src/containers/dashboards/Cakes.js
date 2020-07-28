/* eslint-disable react/no-array-index-key */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card, CardBody, CardTitle } from 'reactstrap';

import IntlMessages from '../../helpers/IntlMessages';
import data from '../../data/cakes';

const Cakes = () => {
  return (
    <Card className="dashboard-link-list">
      <CardBody>
        <CardTitle>
          <IntlMessages id="dashboards.cakes" />
        </CardTitle>
        <div className="d-flex flex-row">
          <div className="w-50">
            <ul className="list-unstyled mb-0">
              {data.slice(0, 12).map((c, index) => {
                return (
                  <li key={index} className="mb-1">
                    <NavLink to={c.link}>{c.title}</NavLink>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="w-50">
            <ul className="list-unstyled mb-0">
              {data.slice(12, 24).map((c, index) => {
                return (
                  <li key={index} className="mb-1">
                    <NavLink to={c.link}>{c.title}</NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default Cakes;
