import React from 'react';
import { injectIntl } from 'react-intl';
import { Row } from 'reactstrap';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import ProfileStatuses from '../../../containers/dashboards/ProfileStatuses';
import SortableStaticticsRow from '../../../containers/dashboards/SortableStaticticsRow';
import SmallLineCharts from '../../../containers/dashboards/SmallLineCharts';
import SalesChartCard from '../../../containers/dashboards/SalesChartCard';
import ProductCategoriesDoughnut from '../../../containers/dashboards/ProductCategoriesDoughnut';
import WebsiteVisitsChartCard from '../../../containers/dashboards/WebsiteVisitsChartCard';
import ConversionRatesChartCard from '../../../containers/dashboards/ConversionRatesChartCard';
import OrderStockRadarChart from '../../../containers/dashboards/OrderStockRadarChart';
import ProductCategoriesPolarArea from '../../../containers/dashboards/ProductCategoriesPolarArea';

const DashboardAnalytics = ({ intl, match }) => {
  const { messages } = intl;
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.analytics" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx sm="12" md="6" className="mb-4">
          <WebsiteVisitsChartCard />
        </Colxx>
        <Colxx sm="12" md="6" className="mb-4">
          <ConversionRatesChartCard />
        </Colxx>
      </Row>
      <Row>
        <Colxx xl="4" lg="6" md="12" className="mb-4">
          <ProductCategoriesDoughnut />
        </Colxx>
        <Colxx xl="4" lg="6" md="12" className="mb-4">
          <ProfileStatuses cardClass="dashboard-progress" />
        </Colxx>
        <Colxx xl="4" lg="12" md="12">
          <SmallLineCharts itemClass="dashboard-small-chart-analytics" />
        </Colxx>
      </Row>
      <SortableStaticticsRow messages={messages} />
      <Row>
        <Colxx xxs="12" lg="6" className="mb-4">
          <OrderStockRadarChart />
        </Colxx>
        <Colxx xxs="12" lg="6" className="mb-4">
          <ProductCategoriesPolarArea />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-4">
          <SalesChartCard />
        </Colxx>
      </Row>
    </>
  );
};
export default injectIntl(DashboardAnalytics);
