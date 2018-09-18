import React from "react";
import PropTypes from "prop-types";
import CarItem from "../CarItem/CarItem";

const CarList = props => {
  const { carsMap } = props;

  return (
    <div>
      {carsMap.map(car => {
        return <CarItem car={car} key={car.id} />;
      })}
    </div>
  );
};

CarList.propTypes = {
  carsMap: PropTypes.arrayOf(PropTypes.object)
};

export default CarList;

// из CarList мы передали массив объектов данные car и  key в CarItem
