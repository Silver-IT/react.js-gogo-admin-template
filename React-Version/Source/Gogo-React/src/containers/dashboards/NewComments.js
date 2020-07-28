/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { NavLink } from 'react-router-dom';

import IntlMessages from '../../helpers/IntlMessages';

import { comments } from '../../data/comments';
import Rating from '../../components/common/Rating';

const NewComments = ({ className = '', displayRate = false }) => {
  return (
    <Card className={className}>
      <CardBody>
        <CardTitle>
          <IntlMessages id="dashboards.new-comments" />
        </CardTitle>
        <div className="dashboard-list-with-user">
          <PerfectScrollbar
            options={{ suppressScrollX: true, wheelPropagation: false }}
          >
            {comments.map((item, index) => {
              return (
                <div
                  key={index}
                  className="d-flex flex-row mb-3 pb-3 border-bottom"
                >
                  <NavLink to="/app/pages/product/details">
                    <img
                      src={item.thumb}
                      alt={item.title}
                      className="img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall"
                    />
                  </NavLink>

                  <div className="pl-3 pr-2">
                    <NavLink to="/app/pages/product/details">
                      <p className="font-weight-medium mb-0">{item.title}</p>
                      <p className="text-muted mb-0 text-small">
                        {item.detail}
                      </p>
                      {displayRate && (
                        <div className="form-group mb-1 mt-2">
                          <Rating total={5} rating={5} interactive={false} />
                        </div>
                      )}
                    </NavLink>
                  </div>
                </div>
              );
            })}
          </PerfectScrollbar>
        </div>
      </CardBody>
    </Card>
  );
};

export default NewComments;
