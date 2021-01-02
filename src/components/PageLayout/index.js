import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import Logo from '../Logo/index';

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
  background-color: ${(props) => props.theme.colors.ground};
`;

const Header = styled.header`
  background-color: ${(props) => props.theme.colors.muted};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
  box-shadow: 0 3px 24px rgba(0,0,0,0.07), 0 2px 12px rgba(0,0,0,0.05), 0 1px 4px rgba(0,0,0,0.03), 0 1px 1px rgba(0,0,0,0.01);
  position: relative;
  @media (min-width: 960px) {
    padding: 16px 24px;
  }
`;

const LogoLink = styled(Link)`
  display: block;
  width: 64px;
  margin-bottom: -2px;
  @media (min-width: 960px) {
    width: 80px;
  }
`;

const Body = styled.main`
  overflow-y: auto;
`;

const PageLayout = ({ headerContent, bodyContent }) => (
  <Wrapper>
    <Header>
      <LogoLink to="/">
        <Logo />
      </LogoLink>
      {headerContent}
    </Header>
    <Body>
      {bodyContent}
    </Body>
  </Wrapper>
);

PageLayout.propTypes = {
  headerContent: PropTypes.node.isRequired,
  bodyContent: PropTypes.node.isRequired,
};

export default PageLayout;
