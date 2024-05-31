import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import actionApp from "./action";
import factoryApp from "./factory";

function* handleLoadingApp() {
  yield takeEvery(actionApp.LOADING_APP_START, function* (payload) {
    try {
      // eslint-disable-next-line no-unused-vars
      const response = yield call(() => factoryApp.getListSample(payload));
      yield put({
        type: actionApp.LOADING_APP_SUCCESS,
        payload: payload?.payload,
      });
    } catch (error) {
      console.log(error);
    }
  });
}

export default function* rootSaga() {
  yield all([fork(handleLoadingApp)]);
}
