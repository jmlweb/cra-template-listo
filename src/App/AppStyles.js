import { createGlobalStyle, ThemeProvider } from 'styled-components/macro';
import PropTypes from 'prop-types';
import 'normalize.css';
import theme from '../theme';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${theme.fonts.base};
  }

  pre {
    font-family: ${theme.fonts.monospace};
  }
`;

const AppStyles = ({ children }) => (

  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  </>
);

AppStyles.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppStyles;
