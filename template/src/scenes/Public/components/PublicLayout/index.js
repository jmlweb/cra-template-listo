import PropTypes from 'prop-types';
import PageLayout from '../../../../components/PageLayout';
import PublicNavbar from './PublicNavbar';

const PublicLayout = ({ children }) => (
  <PageLayout headerContent={<PublicNavbar />} bodyContent={children} />
);

PublicLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PublicLayout;
