import React from 'react';
import { NavLink } from 'react-router-dom';
import { injectIntl } from 'react-intl';

const CommentWithLikes = ({ intl, className, data }) => {
  const getLikeLabel = (likeCount) => {
    if (likeCount === 1) {
      return intl.messages['pages.like'];
    }
    return intl.messages['pages.likes'];
  };

  return (
    <div
      className={`d-flex flex-row mb-3 border-bottom justify-content-between ${className}`}
    >
      <NavLink to="#" location={{}}>
        <img
          src={data.thumb}
          alt={data.name}
          className="img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall"
        />
      </NavLink>
      <div className="pl-3 flex-grow-1">
        <NavLink to="#" location={{}}>
          <p className="font-weight-medium mb-0">{data.name}</p>
          <p className="text-muted mb-0 text-small">{data.data}</p>
        </NavLink>
        <p className="mt-3">{data.detail}</p>
      </div>
      <div className="comment-likes">
        <span className="post-icon">
          <NavLink to="#" location={{}}>
            <span>
              {data.likes > 0
                ? `${data.likes} ${getLikeLabel(data.likes)}`
                : ''}
            </span>
            <i className="simple-icon-heart ml-2" />
          </NavLink>
        </span>
      </div>
    </div>
  );
};

export default injectIntl(CommentWithLikes);
