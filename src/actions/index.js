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

export const addCar = (car, file) => {
  return async dispatch => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    const date = new Date(Date.now()).toLocaleDateString("ru-RU", options);
    const carsRef = fire.database().ref("/cars");
    const storageRef = fire.storage().ref("images/");
    const newCar = carsRef.push();
    const newCarId = newCar.key;
    dispatch(addCarStart());
    await newCar.set({
      producer: car.producer,
      model: car.model,
      year: car.year,
      color: car.color,
      description: car.description,
      price: car.price,
      phone: car.phone,
      id: newCarId,
      date: date,
      image: file.name
    });
    await storageRef
      .child(file.name)
      .put(file)
      .on("state_changed", snapshot => {
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
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
