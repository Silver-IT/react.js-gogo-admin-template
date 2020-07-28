/* eslint-disable react/no-array-index-key */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { injectIntl } from 'react-intl';
import {
  Card,
  CardBody,
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
} from 'reactstrap';
import SingleLightbox from '../pages/SingleLightbox';
import VideoPlayer from '../common/VideoPlayer';
import CommentWithLikes from '../pages/CommentWithLikes';

const renderLikeAndCommentCount = (messages) => {
  return (
    <div className="mb-3">
      <div className="post-icon mr-3 d-inline-block">
        <NavLink to="#" location={{}}>
          <i className="simple-icon-heart mr-1" />
        </NavLink>
        <span>125 {messages['pages.likes']}</span>
      </div>

      <div className="post-icon mr-3 d-inline-block">
        <NavLink to="#" location={{}}>
          <i className="simple-icon-bubble mr-1" />
        </NavLink>
        <span>6 {messages['pages.comments-title']}</span>
      </div>
    </div>
  );
};

const renderContent = (data) => {
  if (data.type === 'image') {
    return (
      <SingleLightbox
        thumb={data.image}
        large={data.image}
        className="img-fluid border-0 border-radius mb-3"
      />
    );
  }
  if (data.type === 'video') {
    return (
      <VideoPlayer
        autoplay={false}
        controls
        className="video-js card-img video-content mb-3"
        poster={data.image}
        sources={[
          {
            src: data.video,
            type: 'video/mp4',
          },
        ]}
      />
    );
  }
  return <></>;
};

const renderComments = (data) => {
  return data.comments.map((item, index) => {
    return <CommentWithLikes data={item} key={index} />;
  });
};

const Post = ({ data, className, intl }) => {
  const { messages } = intl;
  return (
    <Card className={className}>
      <CardBody>
        <div className="d-flex flex-row mb-3">
          <NavLink to="#" location={{}}>
            <img
              src={data.profilePic}
              alt="thumbnail"
              className="img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall"
            />
          </NavLink>
          <div className="pl-3">
            <NavLink to="#" location={{}}>
              <p className="font-weight-medium mb-0 ">{data.name}</p>
              <p className="text-muted mb-0 text-small">{data.date}</p>
            </NavLink>
          </div>
        </div>
        <p>{data.detail}</p>
        {renderContent(data)}
        {renderLikeAndCommentCount(messages)}
        <div className="mt-5 remove-last-border">{renderComments(data)}</div>
        <InputGroup className="comment-contaiener">
          <Input placeholder={messages['pages.addComment']} />
          <InputGroupAddon addonType="append">
            <Button color="primary">
              <span className="d-inline-block">{messages['pages.send']}</span>{' '}
              <i className="simple-icon-arrow-right ml-2" />
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </CardBody>
    </Card>
  );
};

export default injectIntl(React.memo(Post));
