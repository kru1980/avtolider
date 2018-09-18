import React from "react";
import PropTypes from "prop-types";

const CarItem = ({ car }) => {
  return (
    <div>
      <h3>{car.producer}</h3>
      <p>{car.model}</p>
      <p>{car.year}</p>
      <p>{car.color}</p>
    </div>
  );
};

CarItem.propTypes = {
  car: PropTypes.shape({
    producer: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
  })
};

export default CarItem;
