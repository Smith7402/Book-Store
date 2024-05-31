/**
 * ****************************************************************************
 * @description     :   Export all midleware function of saga
 * @created at      :   2020/12/03
 * @created by      :   QuyPN - quy.pham@toploop.co
 * @package         :   dashlite-admin-react
 * @copyright       :   Copyright (c) TOPLOOP
 * @version         :   1.0.0
 * ****************************************************************************
 */

/**
 * Import libraries
 */
import { all } from "redux-saga/effects";
import appSaga from "./app/saga";
import userSaga from "./user/saga";
import supplierSaga from "./supplier/saga";

/**
 * import saga of other components
 */

/**
 * Fork all function in saga midleware
 * -----------------------------------------
 * @author : QuyPN - 2020/12/03 - create
 * @access : public
 */
export default function* rootSaga() {
  yield all([appSaga(), userSaga(), supplierSaga()]);
}
