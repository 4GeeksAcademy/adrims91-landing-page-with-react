import React from "react";
import PropTypes from "prop-types";

const Jumbotron = (props) => {
  return (
      <div className="container p-5 bg-light text-dark rounded-3">
          <h1 className="display-4 fw-bold">{props.heading}</h1>
          <p className="lead mb-4">{props.lead}</p>
          <a className="btn btn-primary btn-lg" href="#" role="button">{props.button}</a>
      </div>
  );
}

Jumbotron.propTypes = {
    heading: PropTypes.string,
    lead: PropTypes.string,
    button: PropTypes.string
}

export default Jumbotron