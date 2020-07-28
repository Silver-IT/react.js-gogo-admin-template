import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Portfolio = React.lazy(() =>
  import(/* webpackChunkName: "profile-portfolio" */ './portfolio')
);
const Social = React.lazy(() =>
  import(/* webpackChunkName: "profile-social" */ './social')
);

const PagesProfile = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/portfolio`} />
      <Route
        path={`${match.url}/portfolio`}
        render={(props) => <Portfolio {...props} />}
      />
      <Route
        path={`${match.url}/social`}
        render={(props) => <Social {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default PagesProfile;
