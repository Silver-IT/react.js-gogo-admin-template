import React from 'react';
import { NavLink } from 'react-router-dom';
import { injectIntl } from 'react-intl';
import { Badge } from 'reactstrap';

const RecentPost = ({ data }) => {
  return (
    <div className="d-flex flex-row mb-3">
      <NavLink className="d-block position-relative" to="#" location={{}}>
        <img
          src={data.thumb}
          alt="thumbnail"
          className="list-thumbnail border-0"
        />
        {data.badge !== '' && (
          <Badge
            color="primary"
            pill
            className="position-absolute badge-top-left"
          >
            {data.badge}
          </Badge>
        )}
      </NavLink>
      <div className="pl-3 pt-2 pr-2 pb-2">
        <NavLink className="d-block position-relative" to="#" location={{}}>
          <p className="list-item-heading">{data.title}</p>
        </NavLink>
      </div>
    </div>
  );
};

export default injectIntl(RecentPost);
