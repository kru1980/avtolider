import React from "react";
import CarItem from "../CarItem/CarItem";

const CarList = ({ carsMap }) => {
  return (
    <div>
      {carsMap.map(car => {
        return <CarItem car={car} key={car.id} />;
      })}
    </div>
  );
};

export default CarList;
