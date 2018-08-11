import {
  ADD_CAR_SUCCESS,
  ADD_CAR_START,
  ADD_CAR_FAIL
} from "../constants/ActionTypes";

const initialState = {
  byId: {},
  allIds: [],
  loading: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CAR_START:
      return {
        ...state,
        loading: true
      };
    case ADD_CAR_SUCCESS:
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
        allIds: state.allIds.concat(action.payload.id),
        loading: false,
        error: null
      };
    case ADD_CAR_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    default:
      return state;
  }
};

export default reducer;
