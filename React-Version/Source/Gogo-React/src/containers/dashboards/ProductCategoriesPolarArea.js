import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';

import IntlMessages from '../../helpers/IntlMessages';
import { PolarAreaChart } from '../../components/charts';

import { polarAreaChartData } from '../../data/charts';

const ProductCategoriesPolarArea = ({ chartClass = 'chart-container' }) => {
  return (
    <Card>
      <CardBody>
        <CardTitle>
          <IntlMessages id="dashboards.product-categories" />
        </CardTitle>
        <div className={chartClass}>
          <PolarAreaChart shadow data={polarAreaChartData} />
        </div>
      </CardBody>
    </Card>
  );
};

export default ProductCategoriesPolarArea;
