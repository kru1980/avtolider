import { ADD_CAR } from "../constants/ActionTypes";
import uuidv4 from "uuid/v4";

export const addCar = car => {
  const id = uuidv4();
  const addData = new Date();
  return {
    type: ADD_CAR,
    payload: { ...car, id, addData }
  };
};
