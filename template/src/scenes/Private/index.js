import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

const Dashboard = lazy(() => import('./Dashboard'));
const Profile = lazy(() => import('./Profile'));

const Private = () => (
  <Suspense fallback={null}>
    <Switch>
      <Route path="/_/profile" component={Profile} />
      <Route component={Dashboard} />
    </Switch>
  </Suspense>
);

export default Private;
