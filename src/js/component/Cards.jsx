import React from "react";
import PropTypes from "prop-types";

const Cards = (props) => {
  return (
    <div className="container">
      <div className="card mb-4 mx-4">
        <div className="bg-secondary pb-5 text-center align-items-center">
          <img src={props.image} className="card-img-top" alt="500 x 325" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <a href="#" className="btn btn-primary">
            {props.button}
          </a>
        </div>
      </div>
    </div>
  );
};

Cards.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  button: PropTypes.string,
};

export default Cards;
