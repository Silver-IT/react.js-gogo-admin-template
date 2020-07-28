import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card, CardBody, CardSubtitle, CardText } from 'reactstrap';
import ThumbnailImage from './ThumbnailImage';

const UserCardBasic = ({ link = '#', data }) => {
  return (
    <Card className="d-flex flex-row mb-4">
      <NavLink to={link} className="d-flex">
        <ThumbnailImage
          rounded
          small
          src={data.thumb}
          alt="profile"
          className="m-4"
        />
      </NavLink>
      <div className=" d-flex flex-grow-1 min-width-zero">
        <CardBody className=" pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
          <div className="min-width-zero">
            <NavLink to={link}>
              <CardSubtitle className="truncate mb-1">{data.name}</CardSubtitle>
            </NavLink>
            <CardText className="text-muted text-small mb-2">
              {data.status}
            </CardText>
          </div>
        </CardBody>
      </div>
    </Card>
  );
};

export default React.memo(UserCardBasic);
