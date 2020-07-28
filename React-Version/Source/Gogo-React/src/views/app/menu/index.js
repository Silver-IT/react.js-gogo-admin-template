import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const MenuTypes = React.lazy(() =>
  import(/* webpackChunkName: "menu-types" */ './types')
);
const Levels = React.lazy(() =>
  import(/* webpackChunkName: "menu-levels" */ './levels')
);

const UI = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/types`} />
      <Route
        path={`${match.url}/types`}
        render={(props) => <MenuTypes {...props} />}
      />
      <Route
        path={`${match.url}/levels`}
        render={(props) => <Levels {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default UI;
