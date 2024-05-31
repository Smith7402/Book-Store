import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import actionSupplier from "./action";
import factorySupplier from "./factory";

// function* handleGetSupplierById() {
//   yield takeEvery(
//     actionSupplier.GET_SUPPLIER_BY_ID_REQUEST,
//     function* (action) {
//       try {
//         const response = yield call(factorySupplier.getSupplierById(action?.payload));

//         if (response) {
//           yield action.callback?.success && action.callback?.success();
//           yield put({
//             type: actionSupplier.GET_SUPPLIER_BY_ID_SUCCESS,
//             payload: response,
//           });
//         } else {
//           yield put({
//             type: actionSupplier.GET_SUPPLIER_BY_ID_FAILURE,
//           });
//           yield action.callback?.failed && action.callback?.failed();
//         }
//       } catch (error) {
//         yield put({
//           type: actionSupplier.GET_SUPPLIER_BY_ID_FAILURE,
//           payload: error,
//         });
//         yield action.callback?.failed && action.callback?.failed();
//       }
//     }
//   );
// }

function* handleGetSupplierById() {
  yield takeEvery(actionSupplier.GET_SUPPLIER_BY_ID_REQUEST, function* (payload) {
    try {
      const user = yield call(() =>
        factorySupplier.getSupplierById(payload?.payload)
      );
      yield put({ type: actionSupplier.GET_SUPPLIER_BY_ID_SUCCESS, payload: user });
    } catch (error) {
      yield put({
        type: actionSupplier.GET_SUPPLIER_BY_ID_FAILURE,
        payload: error.message,
      });
    }
  });
}

function* handleFetchSupplier() {
  yield takeEvery(actionSupplier.FETCH_SUPPLIER_REQUEST, function* (payload) {
    try {
      const supplier = yield call(() =>
        factorySupplier.getListSample(payload?.payload)
      );
      yield put({
        type: actionSupplier.FETCH_SUPPLIER_SUCCESS,
        payload: supplier,
      });
    } catch (error) {
      yield put({
        type: actionSupplier.FETCH_SUPPLIER_FAILURE,
        payload: error.message,
      });
    }
  });
}

function* handleCreateSupplier() {
  yield takeEvery(actionSupplier.CREATE_SUPPLIER_REQUEST, function* (action) {
    try {
      // Gọi API để tạo mới nhà cung cấp
      const response = yield call(() =>
        factorySupplier.createSupplier(action.payload)
      );
      if (response) {
        yield action.callback?.success && action.callback?.success();
        // Nếu tạo mới thành công, dispatch action CREATE_SUPPLIER_SUCCESS
        yield put({
          type: actionSupplier.CREATE_SUPPLIER_SUCCESS,
          payload: response,
        });
      } else {
        yield put({
          type: actionSupplier.CREATE_SUPPLIER_FAILURE,
        });
        yield action.callback?.failed && action.callback?.failed();
      }
    } catch (error) {
      yield put({
        type: actionSupplier.CREATE_SUPPLIER_FAILURE,
        payload: error.message,
      });
      yield action.callback?.failed && action.callback?.failed();
    }
  });
}

function* handleUpdateSupplier() {
  yield takeEvery(actionSupplier.UPDATE_SUPPLIER_REQUEST, function* (action) {
    try {
      // Gọi API để cập nhật thông tin nhà cung cấp
      const response = yield call(() =>
        factorySupplier.updateSupplier(action.payload)
      );
      if (response) {
        yield action.callback?.success && action.callback?.success();
        yield put({
          type: actionSupplier.UPDATE_SUPPLIER_SUCCESS,
          payload: response,
        });
      } else {
        yield put({
          type: actionSupplier.UPDATE_SUPPLIER_FAILURE,
        });
        yield action.callback?.failed && action.callback?.failed();
      }
    } catch (error) {
      yield put({
        type: actionSupplier.UPDATE_SUPPLIER_FAILURE,
        payload: error.message,
      });
      yield action.callback?.failed && action.callback?.failed();
    }
  });
}

function* handleDeleteSupplier() {
  yield takeEvery(actionSupplier.DELETE_SUPPLIER_REQUEST, function* (action) {
    try {
      // Gọi API để xóa nhà cung cấp
      console.log(action);
      const response = yield call(() =>
        factorySupplier.deleteSupplier(action.payload)
      );
      // check response : trường hợp response trả về data có status 200 thì thành công không thì error dối với api chạy thật
      // => dự án thật phải check response để xem thành công hay thất bại
      if (response) {
        yield action.callback?.success && action.callback?.success();
        yield put({
          type: actionSupplier.DELETE_SUPPLIER_SUCCESS,
        });
      } else {
        yield put({
          type: actionSupplier.DELETE_SUPPLIER_FAILURE,
        });
        yield action.callback?.failed && action.callback?.failed();
      }
    } catch (error) {
      yield put({
        type: actionSupplier.DELETE_SUPPLIER_FAILURE,
        payload: error.message,
      });
      yield action.callback?.failed && action.callback?.failed();
    }
  });
}

export default function* rootSaga() {
  yield all([
    fork(handleFetchSupplier),
    fork(handleCreateSupplier),
    fork(handleUpdateSupplier),
    fork(handleDeleteSupplier),
    fork(handleGetSupplierById),
  ]);
}
