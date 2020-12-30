import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

const Navbar = styled.nav`
  display: flex;
  gap: 12px;

  @media (min-width: 960px) {
    gap: 24px;
  }
`;

const NavbarLink = styled(NavLink)`
  color: ${(props) => props.theme.colors.link};
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 15px;
  transition: color 0.3s;
  &:hover {
    color: ${(props) => props.theme.colors.linkHover};
  }
  &.active {
    color: ${(props) => props.theme.colors.textMuted};
  }
  &:not(:last-child)::after {
    display: block;
    content: " ";
    width: 1px;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    margin-left: 12px;
    @media (min-width: 960px) {
      margin-left: 24px;
    }
  }
`;

const PublicNavbar = () => (
  <Navbar>
    <NavbarLink to="/" exact>
      Home
    </NavbarLink>
    <NavbarLink to="/about">
      About
    </NavbarLink>
    <NavbarLink to="/sign-in">
      Sign in
    </NavbarLink>
  </Navbar>
);

export default PublicNavbar;
