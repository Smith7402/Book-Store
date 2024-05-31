import actionSupplier from "./action";

const initialState = {
  loading: false,
  supplier: {},
  error: null,
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionSupplier.FETCH_SUPPLIER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case actionSupplier.FETCH_SUPPLIER_SUCCESS:
      return {
        ...state,
        loading: false,
        supplier: action.payload,
      };

    case actionSupplier.FETCH_SUPPLIER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case actionSupplier.DELETE_SUPPLIER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case actionSupplier.DELETE_SUPPLIER_SUCCESS:
      return {
        ...state,
        loading: false,
        suppliers: state.suppliers.filter(
          (supplier) => supplier.id !== action.payload.id
        ), // Do something here if needed, like removing the deleted supplier from state
      };

    case actionSupplier.DELETE_SUPPLIER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case actionSupplier.CREATE_SUPPLIER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case actionSupplier.CREATE_SUPPLIER_SUCCESS:
      return {
        ...state,
        loading: false,
        suppliers: [...state.suppliers, action.payload], // Do something here if needed, like adding the newly created supplier to state
      };

    case actionSupplier.CREATE_SUPPLIER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case actionSupplier.UPDATE_SUPPLIER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case actionSupplier.UPDATE_SUPPLIER_SUCCESS:
      return {
        ...state,
        loading: false,
        suppliers: state.suppliers.map((supplier) =>
          supplier.id === action.payload.id ? action.payload : supplier
        ), // Do something here if needed, like updating the existing supplier in state
      };

    case actionSupplier.UPDATE_SUPPLIER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case actionSupplier.GET_SUPPLIER_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case actionSupplier.GET_SUPPLIER_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        supplier: action.payload,
      };

    case actionSupplier.GET_SUPPLIER_BY_ID_FAILURE:
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
