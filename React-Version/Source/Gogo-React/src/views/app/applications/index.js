import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Todo = React.lazy(() =>
  import(/* webpackChunkName: "application-todo" */ './todo')
);
const Survey = React.lazy(() =>
  import(/* webpackChunkName: "application-survey" */ './survey')
);
const SurveyDetail = React.lazy(() =>
  import(/* webpackChunkName: "application-survey-detail" */ './survey-detail')
);
const Chat = React.lazy(() =>
  import(/* webpackChunkName: "application-chat" */ './chat')
);

const Applications = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/todo`} />
      <Route
        path={`${match.url}/todo`}
        render={(props) => <Todo {...props} />}
      />
      <Route
        path={`${match.url}/survey/:surveyid`}
        render={(props) => <SurveyDetail {...props} />}
        isExact
      />
      <Route
        path={`${match.url}/survey`}
        render={(props) => <Survey {...props} />}
        isExact
      />
      <Route
        path={`${match.url}/chat`}
        render={(props) => <Chat {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Applications;
