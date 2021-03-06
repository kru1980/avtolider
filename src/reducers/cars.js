import {
  ADD_CAR_SUCCESS,
  ADD_CAR_START,
  FETCH_CARS_START,
  FETCH_CARS_SUCCESS,
  FETCH_CARS_FAIL
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
            color: action.payload.color,
            description: action.payload.description,
            price: action.payload.price,
            phone: action.payload.phone
          }
        },
        allIds: state.allIds.concat(action.payload.id),
        loading: false,
        error: null
      };
    case FETCH_CARS_START: {
      return {
        ...state,
        loading: true
      };
    }
    case FETCH_CARS_SUCCESS:
      const allIds = Object.keys(action.payload);
      return {
        ...state,
        byId: {
          ...state.byId,
          ...action.payload
        },
        allIds: allIds,
        loading: false,
        error: null
      };
    case FETCH_CARS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
