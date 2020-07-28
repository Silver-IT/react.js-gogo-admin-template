import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Components = React.lazy(() =>
  import(/* webpackChunkName: "forms-components" */ './components')
);
const Layouts = React.lazy(() =>
  import(/* webpackChunkName: "forms-layouts" */ './layouts')
);
const Validations = React.lazy(() =>
  import(/* webpackChunkName: "forms-validations" */ './validations')
);
const Wizard = React.lazy(() =>
  import(/* webpackChunkName: "forms-wizard" */ './wizard')
);

const Forms = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/components`} />
      <Route
        path={`${match.url}/components`}
        render={(props) => <Components {...props} />}
      />
      <Route
        path={`${match.url}/layouts`}
        render={(props) => <Layouts {...props} />}
      />
      <Route
        path={`${match.url}/validations`}
        render={(props) => <Validations {...props} />}
      />
      <Route
        path={`${match.url}/wizard`}
        render={(props) => <Wizard {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Forms;
