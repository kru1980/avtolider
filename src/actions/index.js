import {
  ADD_CAR_SUCCESS,
  ADD_CAR_START,
  ADD_CAR_FAIL
} from "../constants/ActionTypes";
import database from "../firebase";

export const addCarStart = () => {
  return {
    type: ADD_CAR_START
  };
};

export const addCarSucess = (car, id, addData) => {
  return {
    type: ADD_CAR_SUCCESS,
    payload: { ...car, id, addData }
  };
};

export const addCarFail = error => {
  return {
    type: ADD_CAR_FAIL,
    payload: error
  };
};

export const addCar = car => {
  return dispatch => {
    const addData = new Date();
    const carsRef = database.ref("/cars");
    const newCar = carsRef.push();
    const newCarId = newCar.key;

    dispatch(addCarStart());

    newCar
      .set({
        ...car,
        id: newCarId,
        data: addData
      })
      .then(() => {
        dispatch(addCarSucess(car, newCarId, addData));
      })
      .catch(err => {
        dispatch(addCarFail(err));
      });
  };
};
