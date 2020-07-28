import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';

import IntlMessages from '../../helpers/IntlMessages';
import { DoughnutChart } from '../../components/charts';

import { doughnutChartData } from '../../data/charts';

const ProductCategoriesDoughnut = () => {
  return (
    <Card className="h-100">
      <CardBody>
        <CardTitle>
          <IntlMessages id="dashboards.product-categories" />
        </CardTitle>
        <div className="dashboard-donut-chart">
          <DoughnutChart shadow data={doughnutChartData} />
        </div>
      </CardBody>
    </Card>
  );
};

export default ProductCategoriesDoughnut;
