import {
  ADD_CAR_SUCCESS,
  ADD_CAR_START,
  ADD_CAR_FAIL,
  FETCH_CARS_START,
  FETCH_CARS_SUCCESS,
  FETCH_CARS_FAIL
} from "../constants/ActionTypes";
import fire from "../firebase";

export const addCarStart = () => {
  return {
    type: ADD_CAR_START
  };
};

export const addCarSuccess = (car, id, date) => {
  return {
    type: ADD_CAR_SUCCESS,
    payload: { ...car, id, date }
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
    const date = new Date().toString();
    const carsRef = fire.database().ref("/cars");
    const newCar = carsRef.push();
    const newCarId = newCar.key;

    dispatch(addCarStart());

    newCar
      .set({
        ...car,
        id: newCarId,
        date: date
      })
      .then(() => {
        dispatch(addCarSuccess(car, newCarId, date));
      })
      .catch(err => {
        dispatch(addCarFail(err));
      });
  };
};

export const fetchCarStart = () => {
  return {
    type: FETCH_CARS_START
  };
};

export const fetchCarsSuccess = cars => {
  return {
    type: FETCH_CARS_SUCCESS,
    payload: { ...cars }
  };
};

export const fetchCars = () => {
  return dispatch => {
    const carsRef = fire.database().ref("/cars");

    dispatch(addCarStart());

    carsRef.once("value", snapshot => {
      const cars = snapshot.val();
      dispatch(fetchCarsSuccess(cars));
    });
  };
};
