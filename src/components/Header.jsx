import React from "react";
import PropTypes from "prop-types";

function Header({ headerTitle }) {
  return (
    <div className="header">
      <h1>{headerTitle}</h1>
    </div>
  );
}

Header.defaultProps = {
  headerTitle: "Feedback",
};

Header.propTypes = {
  headerTitle: PropTypes.string,
};

export default Header;
