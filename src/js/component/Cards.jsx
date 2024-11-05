import React from "react";
import PropTypes from "prop-types";

const Cards = (props) => {
  return (
    <div className="justify-content-start m-4">
      <div className="bg-light p-5">
        <img src={props.image} alt="500 x 325" className="img-fluid" />
      </div>
      <div>
        <h2>Card Title</h2>
        <p className="lead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          sint suscipit esse fuga adipisci, quaerat quidem iure explicabo
          perspiciatis doloremque magnam reiciendis incidunt ad iste, quibusdam
          voluptate tempore inventore optio.
        </p>
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
