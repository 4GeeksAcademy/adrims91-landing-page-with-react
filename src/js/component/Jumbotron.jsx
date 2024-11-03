import React from "react";
import PropTypes from "prop-types";

const Jumbotron = (props) => {
  return (
    <div className="m-4 p-5 bg-light text-dark rounded-3">
    <div className="row">
      <div className="col-12">
        <h1 className="display-4 fw-bold">{props.heading}</h1>
        <p className="lead mb-4">{props.lead}</p>
        <div className="d-grid gap-2 col-8 col-md-2">
          <a className="btn btn-primary btn-lg" href="#" role="button">{props.button}</a>
        </div>
      </div>
    </div>
  </div>
  );
}

Jumbotron.propTypes = {
    heading: PropTypes.string,
    lead: PropTypes.string,
    button: PropTypes.string
}

export default Jumbotron