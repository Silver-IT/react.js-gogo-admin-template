import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Product = React.lazy(() =>
  import(/* webpackChunkName: "pages-product" */ './product')
);
const Profile = React.lazy(() =>
  import(/* webpackChunkName: "pages-profile" */ './profile')
);
const Miscellaneous = React.lazy(() =>
  import(/* webpackChunkName: "pages-miscellaneous" */ './miscellaneous')
);
const Blog = React.lazy(() =>
  import(/* webpackChunkName: "pages-blog" */ './blog')
);

const Pages = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/product`} />
      <Route
        path={`${match.url}/product`}
        render={(props) => <Product {...props} />}
      />
      <Route
        path={`${match.url}/profile`}
        render={(props) => <Profile {...props} />}
      />
      <Route
        path={`${match.url}/blog`}
        render={(props) => <Blog {...props} />}
      />
      <Route
        path={`${match.url}/miscellaneous`}
        render={(props) => <Miscellaneous {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Pages;
