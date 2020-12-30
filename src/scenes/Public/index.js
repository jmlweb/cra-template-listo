import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import PublicLayout from './components/PublicLayout';

const Public = () => (
  <PublicLayout>
    <Switch>
      <Route path="/about" component={About} />
      <Route component={Home} />
    </Switch>
  </PublicLayout>
);

export default Public;
