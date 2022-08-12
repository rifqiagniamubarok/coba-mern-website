const { createStore, combineReducers } = require("redux");

const initialStateHome = {
  dataBlogs: [],
};

const HomeReducer = (state = initialStateHome, action) => {
  if (action.type === "UPDATE_DATA_BLOG") {
    return {
      ...state,
      dataBlogs: action.payload,
    };
  }

  return state;
};

const initialState = {
  name: "rifqi",
};

const GlobalReducer = (state = initialState, action) => {
  if (action.type === "UPDATE_NAME") {
    return {
      ...state,
      name: "agnia",
    };
  }
  return state;
};

const reducer = combineReducers({ HomeReducer, GlobalReducer });

const store = createStore(reducer);

export default store;
