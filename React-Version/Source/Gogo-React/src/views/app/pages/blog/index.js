import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const BlogList = React.lazy(() =>
  import(/* webpackChunkName: "blog-list" */ './blog-list')
);

const BlogDetail = React.lazy(() =>
  import(/* webpackChunkName: "blog-detail" */ './blog-detail')
);

const PagesBlog = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/blog-list`} />
      <Route
        path={`${match.url}/blog-list`}
        render={(props) => <BlogList {...props} />}
      />
      <Route
        path={`${match.url}/blog-detail`}
        render={(props) => <BlogDetail {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default PagesBlog;
