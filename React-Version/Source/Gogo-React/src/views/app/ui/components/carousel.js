/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Row, Card, CardBody, CardTitle } from 'reactstrap';
import {
  Colxx,
  Separator,
} from '../../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../../containers/navs/Breadcrumb';
import IntlMessages from '../../../../helpers/IntlMessages';
import { items } from '../../../../data/carouselItems';
import GlideComponent from '../../../../components/carousel/GlideComponent';

const BasicCarouselItem = ({ title, img, detail, badges }) => {
  return (
    <div className="glide-item">
      <Card className="flex-row">
        <div className="w-50 position-relative">
          <img className="card-img-left" src={img} alt={title} />
          {badges &&
            badges.map((b, index) => {
              return (
                <span
                  key={index}
                  className={`badge badge-pill badge-${
                    b.color
                  } position-absolute ${
                    index === 0
                      ? 'badge-top-left'
                      : `badge-top-left-${index + 1}`
                  }`}
                >
                  {b.title}
                </span>
              );
            })}
        </div>
        <div className="w-50">
          <CardBody>
            <h6 className="mb-4">{title}</h6>
            <footer>
              <p className="text-muted text-small mb-0 font-weight-light">
                {detail}
              </p>
            </footer>
          </CardBody>
        </div>
      </Card>
    </div>
  );
};

const SingleCarouselItem = ({ title, img, category, detail, badges }) => {
  return (
    <div className="glide-item">
      <Card className="flex-row">
        <img
          className="list-thumbnail responsive border-0 card-img-left"
          src={img}
          alt={title}
        />
        <div className="pl-2 d-flex flex-grow-1 min-width-zero">
          <CardBody className="align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
            <p className="list-item-heading mb-1 truncate">{title}</p>

            <p className="mb-0 text-muted text-small">{category}</p>
            <p className="mb-0 text-muted text-small">{detail}</p>
            <div>
              {badges &&
                badges.map((b, index) => {
                  return (
                    <span
                      key={index}
                      className={`badge badge-pill badge-${b.color} ${
                        index < badges.length && 'mr-1'
                      }`}
                    >
                      {b.title}
                    </span>
                  );
                })}
            </div>
          </CardBody>
        </div>
      </Card>
    </div>
  );
};

const NoControlCarouselItem = ({ title, img, detail, badges }) => {
  return (
    <div className="glide-item">
      <Card>
        <div className="position-relative">
          <img className="card-img-top" src={img} alt={title} />
          {badges &&
            badges.map((b, index) => {
              return (
                <span
                  key={`badges_${index}`}
                  className={`badge badge-pill badge-${
                    b.color
                  } position-absolute ${
                    index === 0
                      ? 'badge-top-left'
                      : `badge-top-left-${index + 1}`
                  }`}
                >
                  {b.title}
                </span>
              );
            })}
        </div>
        <CardBody>
          <h6 className="mb-4">{title}</h6>
          <footer>
            <p className="text-muted text-small mb-0 font-weight-light">
              {detail}
            </p>
          </footer>
        </CardBody>
      </Card>
    </div>
  );
};

const CarouselUi = ({ match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.carousel" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12">
          <CardTitle>
            <IntlMessages id="carousel.basic" />
          </CardTitle>
        </Colxx>
        <Colxx xxs="12" className="pl-0 pr-0 mb-5">
          <GlideComponent
            settings={{
              gap: 5,
              perView: 3,
              type: 'carousel',
              breakpoints: {
                600: { perView: 1 },
                1400: { perView: 2 },
              },
            }}
          >
            {items.map((item) => {
              return (
                <div key={item.id}>
                  <BasicCarouselItem {...item} />
                </div>
              );
            })}
          </GlideComponent>
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12">
          <CardTitle>
            <IntlMessages id="carousel.single" />
          </CardTitle>
        </Colxx>
        <Colxx xxs="12" className="pl-0 pr-0 mb-5">
          <GlideComponent
            settings={{
              gap: 5,
              perView: 1,
              type: 'carousel',
            }}
          >
            {items.map((item) => {
              return (
                <div key={item.id}>
                  <SingleCarouselItem {...item} />
                </div>
              );
            })}
          </GlideComponent>
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12">
          <CardTitle>
            <IntlMessages id="carousel.without-controls" />
          </CardTitle>
        </Colxx>
        <Colxx xxs="12" className="pl-0 pr-0 mb-5">
          <GlideComponent
            settings={{
              gap: 5,
              perView: 4,
              type: 'carousel',
              breakpoints: {
                480: { perView: 1 },
                800: { perView: 2 },
                1200: { perView: 3 },
              },
              hideNav: true,
            }}
          >
            {items.map((item) => {
              return (
                <div key={item.id}>
                  <NoControlCarouselItem {...item} />
                </div>
              );
            })}
          </GlideComponent>
        </Colxx>
      </Row>
    </>
  );
};

export default CarouselUi;
