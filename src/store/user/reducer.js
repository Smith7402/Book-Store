import actionUser from "./action";

const initialState = {
  loading: false,
  user: {},
  error: null,
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionUser.FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionUser.FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case actionUser.FETCH_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return { ...state };
  }
};

export default myReducer;
