import { ADD_CAR } from "../constants/ActionTypes";

// byId: {
//   cars1: {
//     id: "cars1",
//     model: "bmv",
//     year: 1990
//   },
//   cars2: {
//     id: "cars2",
//     model: "lexus",
//     year: 2010
//   }
// },
// allIds: ["cars1", "cars2"]

const initialState = {
  byId: {},
  allIds: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CAR:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.payload.id]: {
            id: action.payload.id,
            date: action.payload.date,
            producer: action.payload.producer,
            model: action.payload.model,
            year: action.payload.year,
            color: action.payload.color
          }
        },
        allIds: state.allIds.concat(action.payload.id)
      };
    default:
      return state;
  }
};

export default reducer;
