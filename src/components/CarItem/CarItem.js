import React from "react";

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

export default CarItem;
