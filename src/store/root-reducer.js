/**
 * import libraries
 */
import { combineReducers } from "redux";
import appReducer from "./app/reducer";
import userReducer from "./user/reducer";
import supplierReducer from "./supplier/reducer";

/**
 * import reducer process for all child components
 */

/**
 * Combinie all reducers on app
 * -----------------------------------------
 * @author : CHINHVN - 2024/24/03 - create
 * @access : public
 */
const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer,
  supplier: supplierReducer,
});

export default rootReducer;
