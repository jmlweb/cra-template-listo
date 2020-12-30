import { Switch, Route } from 'react-router-dom';
import Public from './Public';
import Private from './Private';

const Scenes = () => (
  <Switch>
    {/* You may protect your private routes */}
    <Route path="/_" component={Private} />
    <Route component={Public} />
  </Switch>
);

export default Scenes;
