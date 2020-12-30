import { Helmet } from 'react-helmet';
import { BrowserRouter } from 'react-router-dom';
import Scenes from '../scenes';
import AppStyles from './AppStyles';

const App = () => (
  <>
    <Helmet>
      <title>Listo</title>
      <meta name="description" content="Listo CRA Template" />
    </Helmet>
    <AppStyles>
      <BrowserRouter>
        <Scenes />
      </BrowserRouter>
    </AppStyles>
  </>
);

export default App;
