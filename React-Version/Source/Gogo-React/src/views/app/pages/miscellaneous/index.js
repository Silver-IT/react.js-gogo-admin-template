import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Faq = React.lazy(() =>
  import(/* webpackChunkName: "miscellaneous-faq" */ './faq')
);
const Invoice = React.lazy(() =>
  import(/* webpackChunkName: "miscellaneous-invoice" */ './invoice')
);
const KnowledgeBase = React.lazy(() =>
  import(
    /* webpackChunkName: "miscellaneous-knowledge-base" */ './knowledge-base'
  )
);
const Mailing = React.lazy(() =>
  import(/* webpackChunkName: "miscellaneous-mailing" */ './mailing')
);
const Prices = React.lazy(() =>
  import(/* webpackChunkName: "miscellaneous-prices" */ './prices')
);
const Search = React.lazy(() =>
  import(/* webpackChunkName: "miscellaneous-search" */ './search')
);

const PagesMiscellaneous = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/faq`} />
      <Route path={`${match.url}/faq`} render={(props) => <Faq {...props} />} />
      <Route
        path={`${match.url}/invoice`}
        render={(props) => <Invoice {...props} />}
      />
      <Route
        path={`${match.url}/knowledge-base`}
        render={(props) => <KnowledgeBase {...props} />}
      />
      <Route
        path={`${match.url}/mailing`}
        render={(props) => <Mailing {...props} />}
      />
      <Route
        path={`${match.url}/prices`}
        render={(props) => <Prices {...props} />}
      />
      <Route
        path={`${match.url}/search`}
        render={(props) => <Search {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default PagesMiscellaneous;
