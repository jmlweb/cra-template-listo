import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import Scenes from '../scenes';
import AppStyles from './AppStyles';

const App = () => (
  <HelmetProvider>
    <Helmet>
      <title>Listo</title>
      <meta name="description" content="Web site created using Listo CRA Template" />
    </Helmet>
    <AppStyles>
      <BrowserRouter>
        <Scenes />
      </BrowserRouter>
    </AppStyles>
  </HelmetProvider>
);

export default App;
