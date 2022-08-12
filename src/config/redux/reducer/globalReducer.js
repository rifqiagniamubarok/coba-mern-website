const initialState = {
  name: "rifqi",
};
const globalReducer = (state = initialState, action) => {
  if (action.type === "UPDATE_NAME") {
    return {
      ...state,
      name: "agnia",
    };
  }
  return state;
};

export default globalReducer;
