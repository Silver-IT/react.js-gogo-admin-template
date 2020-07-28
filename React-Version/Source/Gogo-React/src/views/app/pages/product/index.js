import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const DataList = React.lazy(() =>
  import(/* webpackChunkName: "product-data-list" */ './data-list')
);
const ImageList = React.lazy(() =>
  import(/* webpackChunkName: "product-image-list" */ './image-list')
);
const ThumbList = React.lazy(() =>
  import(/* webpackChunkName: "product-thumb-list" */ './thumb-list')
);
const Details = React.lazy(() =>
  import(/* webpackChunkName: "product-details" */ './details')
);
const DetailsAlt = React.lazy(() =>
  import(/* webpackChunkName: "product-details-alt" */ './details-alt')
);

const PagesProduct = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/data-list`} />
      <Route
        path={`${match.url}/data-list`}
        render={(props) => <DataList {...props} />}
      />
      <Route
        path={`${match.url}/image-list`}
        render={(props) => <ImageList {...props} />}
      />
      <Route
        path={`${match.url}/thumb-list`}
        render={(props) => <ThumbList {...props} />}
      />
      <Route
        path={`${match.url}/details`}
        render={(props) => <Details {...props} />}
      />
      <Route
        path={`${match.url}/details-alt`}
        render={(props) => <DetailsAlt {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default PagesProduct;
