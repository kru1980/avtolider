import { ADD_CAR } from "../constants/ActionTypes";

const initialState = {
  byId: {
    comments1: {
      id: "comments1",
      author: "1",
      comment: "dsfsdfsdfsdfs"
    },
    comments2: {
      id: "comments2",
      author: "2",
      comment: "dsfsdfsdfsdfs"
    }
  },
  allIds: ["comments1", "comments2"]
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
