import { Helmet } from 'react-helmet';
import styled from 'styled-components/macro';

const SWrapper = styled.div`
  padding: 16px;
  @media (min-width: 960px) {
    padding: 24px;
  }
`;

const STitle = styled.h1`
  font-size: 32px;
  margin: 0 0 12px;
  @media (min-width: 960px) {
    margin: 0 0 16px;
  }
`;

const SEntry = styled.p`
  font-size: 20px;
  line-height: 1.3;
  color: ${(props) => props.theme.colors.textXMuted};
  margin: 0 0 24px;
  @media (min-width: 960px) {
    font-size: 24px;
  }
`;

const SList = styled.ul`
  list-style: none;
  margin: 0 0 16px;
  padding: 0;
`;

const SListItem = styled.li`
  font-size: 20px;
  margin: 0 0 12px;
  &::before {
    content: "⚡️ ";
  }
`;

const SListLink = styled.a.attrs(() => ({
  rel: 'external',
  target: '_blank',
}))`
  color: ${(props) => props.theme.colors.link};
  transition: color 0.2s;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.colors.linkHover};
  }
`;

const Home = () => (
  <>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <SWrapper>
      <STitle>Listo CRA Template</STitle>
      <SEntry>
        Listo is an opinionated create-react-app template. Includes an awesome
        set of third-party technologies already configured, as well as some
        well-defined practices to organize the project&apos;s code:
      </SEntry>
      <SList>
        <SListItem>
          <SListLink href="https://styled-components.com/">
            styled-components
          </SListLink>
          {' '}
          with theme support
        </SListItem>
        <SListItem>
          <SListLink href="https://reactrouter.com/web/guides/quick-start">
            react-router
          </SListLink>
        </SListItem>
        <SListItem>
          <SListLink href="https://github.com/nfl/react-helmet">
            React Helmet
          </SListLink>
        </SListItem>
        <SListItem>
          <SListLink href="https://github.com/geelen/react-snapshot">
            React Snapshot
          </SListLink>
          {' '}
          with static content generation of public routes
        </SListItem>
        <SListItem>
          <SListLink href="https://necolas.github.io/normalize.css/">
            normalize.css
          </SListLink>
        </SListItem>
        <SListItem>
          <SListLink href="https://www.npmjs.com/package/prop-types">
            prop-types
          </SListLink>
        </SListItem>
        <SListItem>
          <SListLink href="https://eslint.org/">eslint</SListLink>
          {' '}
          with
          {' '}
          <SListLink href="https://www.npmjs.com/package/eslint-config-airbnb">
            airbnb config
          </SListLink>
        </SListItem>
        <SListItem>
          <SListLink href="https://ijk.ghost.io/structure-react-project/">
            Scene based folder structure
          </SListLink>
          {' '}
          separated by role (but agnostic for implementation)
        </SListItem>
        <SListItem>
          <SListLink href="https://editorconfig.org/">
            editorconfig
          </SListLink>
        </SListItem>
      </SList>
    </SWrapper>
  </>
);

export default Home;
