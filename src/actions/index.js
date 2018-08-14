import {
  ADD_CAR_SUCCESS,
  ADD_CAR_START,
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

export const addCar = car => {
  return async dispatch => {
    const date = new Date(Date.now()).toString();
    const carsRef = fire.database().ref("/cars");
    const newCar = carsRef.push();
    const newCarId = newCar.key;
    dispatch(addCarStart());
    await newCar.set({
      ...car,
      id: newCarId,
      date: date
    });
    dispatch(addCarSuccess(car, newCarId, date));
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

export const fetchCarsFail = error => {
  return {
    type: FETCH_CARS_FAIL,
    payload: error
  };
};

export const fetchCars = () => {
  return async dispatch => {
    dispatch(addCarStart());
    try {
      const carsRef = fire.database().ref("/cars");
      const snapshot = await carsRef.once("value");
      const cars = snapshot.val();
      if (!cars) throw new Error("Не могу загрузить список автомобилей");
      dispatch(fetchCarsSuccess(cars));
    } catch (error) {
      console.log("Error getting documents ", error.message);
      dispatch(fetchCarsFail(error.message));
    }
  };
};
