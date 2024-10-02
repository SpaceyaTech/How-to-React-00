import PropTypes from "prop-types";

const Header = ({ firstName }) => {
  return <div>Hello {firstName}</div>;
};

Header.propTypes = {
  firstName: PropTypes.string.isRequired,
};

export default Header;
