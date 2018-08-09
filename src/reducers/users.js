const initialState = {
  byId: {
    "1": {
      id: "1",
      name: "Rodion",
      mail: "test@mail.ru",
      role: "admin"
    },
    "2": {
      id: "2",
      name: "Sergey",
      mail: "test@mail.ru",
      role: "user"
    }
  },
  allIds: ["1", "2"]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
