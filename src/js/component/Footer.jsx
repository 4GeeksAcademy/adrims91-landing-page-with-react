import React from "react";
import PropTypes from "prop-types";

const Footer = (props) => {
  return (
    <div className="bg-dark text-white text-center p-3">
      <p>{props.paragraph}</p>
    </div>
  );
};

Footer.propTypes = {
  paragraph: PropTypes.string,
};

export default Footer;
