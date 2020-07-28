import React from 'react';
import {
  Row,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImg,
  CardText,
  Button,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

import IntlMessages from '../../helpers/IntlMessages';
import { Colxx } from '../../components/common/CustomBootstrap';
import ThumbnailImage from '../../components/cards/ThumbnailImage';
import ThumbnailLetters from '../../components/cards/ThumbnailLetters';

const UserCardExamples = () => {
  return (
    <Row>
      <Colxx xxs="12">
        <CardTitle className="mb-4">
          <IntlMessages id="cards.user-card" />
        </CardTitle>
        <Row>
          <Colxx md="6" sm="6" lg="4" xxs="12">
            <Card className="mb-4">
              <CardBody>
                <div className="text-center">
                  <CardImg
                    top
                    src="/assets/img/profile-pic-l.jpg"
                    alt="Card image cap"
                    className="img-thumbnail border-0 rounded-circle mb-4 list-thumbnail"
                  />
                  <NavLink to="/app/ui/cards">
                    <CardSubtitle className="mb-1">Sarah Kortney</CardSubtitle>
                  </NavLink>
                  <CardText className="text-muted text-small mb-4">
                    Executive Director
                  </CardText>
                  <Button outline size="sm" color="primary">
                    Edit
                  </Button>
                </div>
              </CardBody>
            </Card>
          </Colxx>

          <Colxx md="6" sm="6" lg="4" xxs="12">
            <Card className="d-flex flex-row mb-4">
              <NavLink to="/app/ui/cards" className="d-flex">
                <ThumbnailImage
                  rounded
                  src="/assets/img/profile-pic-l.jpg"
                  alt="Card image cap"
                  className="m-4"
                />
              </NavLink>
              <div className=" d-flex flex-grow-1 min-width-zero">
                <CardBody className=" pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                  <div className="min-width-zero">
                    <NavLink to="/app/ui/cards">
                      <CardSubtitle className="truncate mb-1">
                        Sarah Kortney
                      </CardSubtitle>
                    </NavLink>
                    <CardText className="text-muted text-small mb-2">
                      Executive Director
                    </CardText>
                    <Button outline size="xs" color="primary">
                      Edit
                    </Button>
                  </div>
                </CardBody>
              </div>
            </Card>

            <Card className="d-flex flex-row mb-4">
              <NavLink to="/app/ui/cards" className="d-flex">
                <ThumbnailLetters
                  rounded
                  text="Sarah Kortney"
                  className="m-4"
                />
              </NavLink>
              <div className=" d-flex flex-grow-1 min-width-zero">
                <CardBody className=" pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                  <div className="min-width-zero">
                    <NavLink to="/app/ui/cards">
                      <CardSubtitle className="truncate mb-1">
                        Sarah Kortney
                      </CardSubtitle>
                    </NavLink>
                    <CardText className="text-muted text-small mb-2">
                      Executive Director
                    </CardText>
                    <Button outline size="xs" color="primary">
                      Edit
                    </Button>
                  </div>
                </CardBody>
              </div>
            </Card>
          </Colxx>

          <Colxx md="6" sm="6" lg="4" xxs="12">
            <Card className="d-flex flex-row mb-4">
              <NavLink to="/app/ui/cards" className="d-flex">
                <ThumbnailImage
                  rounded
                  small
                  src="/assets/img/profile-pic-l.jpg"
                  alt="profile"
                  className="m-4"
                />
              </NavLink>
              <div className=" d-flex flex-grow-1 min-width-zero">
                <CardBody className=" pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                  <div className="min-width-zero">
                    <NavLink to="/app/ui/cards">
                      <CardSubtitle className="truncate mb-1">
                        Sarah Kortney
                      </CardSubtitle>
                    </NavLink>
                    <CardText className="text-muted text-small mb-2">
                      Executive Director
                    </CardText>
                  </div>
                </CardBody>
              </div>
            </Card>

            <Card className="d-flex flex-row mb-4">
              <NavLink to="/app/ui/cards" className="d-flex">
                <ThumbnailLetters
                  rounded
                  small
                  text="Sarah Kortney"
                  className="m-4"
                />
              </NavLink>
              <div className=" d-flex flex-grow-1 min-width-zero">
                <CardBody className=" pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                  <div className="min-width-zero">
                    <NavLink to="/app/ui/cards">
                      <CardSubtitle className="truncate mb-1">
                        Sarah Kortney
                      </CardSubtitle>
                    </NavLink>
                    <CardText className="text-muted text-small mb-2">
                      Executive Director
                    </CardText>
                  </div>
                </CardBody>
              </div>
            </Card>
          </Colxx>
        </Row>
      </Colxx>
    </Row>
  );
};

export default UserCardExamples;
