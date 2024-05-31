import actionApp from "./action";

const initialState = {
  loading: false,
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionApp.LOADING_APP_START:
      return {
        ...state,
        loading: false,
      };
    case actionApp.LOADING_APP_SUCCESS:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return { ...state };
  }
};

export default myReducer;
