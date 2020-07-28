import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import IntlMessages from '../../helpers/IntlMessages';
import Rating from '../../components/common/Rating';
import data from '../../data/topRatedItems';
import GlideComponent from '../../components/carousel/GlideComponent';

const TopRatedItem = ({ image, order, title, rate, rateCount }) => (
  <div>
    <img src={image} alt={title} className="mb-4" />
    <h6 className="mb-1">
      <span className="mr-2">{order}.</span>
      {title}
    </h6>
    <Rating total={5} rating={rate} interactive={false} />
    <p className="text-small text-muted mb-0 d-inline-block">({rateCount})</p>
  </div>
);

const TopRatedItems = () => {
  return (
    <Card className="dashboard-top-rated">
      <CardBody>
        <CardTitle>
          <IntlMessages id="dashboards.top-rated-items" />
        </CardTitle>
        <GlideComponent
          settings={{
            gap: 5,
            perView: 1,
            type: 'carousel',
            peek: { before: 0, after: 100 },
            breakpoints: {
              480: { perView: 1 },
              992: { perView: 2 },
              1200: { perView: 1 },
            },
            hideNav: true,
          }}
        >
          {data.map((item) => {
            return (
              <div key={item.id}>
                <TopRatedItem {...item} />
              </div>
            );
          })}
        </GlideComponent>
      </CardBody>
    </Card>
  );
};

export default TopRatedItems;
