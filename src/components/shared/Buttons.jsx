import React from "react";
import PropTypes from "prop-types";

function button({ type, version, children, isDisable }) {
  return (
    <button
      type={type}
      className={`inputButton inputButton-${version}`}
      disabled={isDisable}
    >
      {children}
    </button>
  );
}

button.defaultProps = {
  type: "button",
  version: "primary",
  isDisable: false,
};

button.propTypes = {
  type: PropTypes.string,
  version: PropTypes.string,
  children: PropTypes.isRequired,
  isDisable: PropTypes.bool,
};


export default button;
