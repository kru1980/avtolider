import { ADD_CAR } from "../constants/ActionTypes";

const initialState = {
  byId: {
    cars1: {
      id: "cars1",
      model: "bmv",
      year: 1990,
      comments: ["comments1", "comments2"]
    },
    cars2: {
      id: "cars2",
      model: "lexus",
      year: 2010,
      comments: ["comments3", "comments4"]
    }
  },
  allIds: ["cars1", "cars2"]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CAR:
      console.log(state);
      return state;
    default:
      return state;
  }
};

export default reducer;
