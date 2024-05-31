import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import actionUser from "./action";
import factoryUser from "./factory";

function* handleFetchUser() {
  yield takeEvery(actionUser.FETCH_USER_REQUEST, function* (payload) {
    try {
      const user = yield call(() =>
        factoryUser.getListSample(payload?.payload)
      );
      yield put({ type: actionUser.FETCH_USER_SUCCESS, payload: user });
    } catch (error) {
      yield put({
        type: actionUser.FETCH_USER_FAILURE,
        payload: error.message,
      });
    }
  });
}

export default function* rootSaga() {
  yield all([fork(handleFetchUser)]);
}
