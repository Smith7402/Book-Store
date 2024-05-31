/* eslint-disable no-undef */

/**
 * import libraries
 */
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware, { END } from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
/**
 * import reducer and middleware for store
 */
import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";

/**
 * Creates a Redux middleware and connects the Sagas to the Redux Store
 */
const sagaMiddleware = createSagaMiddleware();

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

/**
 * Ceeate store with reducer and middleware
 * -----------------------------------------
 * @author : CHINHVN - 2024/24/03 - create
 * @param  : {Object} - Current state of system
 * @returns: {Object} - store of system
 * @access : public
 */
function initStore(initialState = {}) {
  /**
   * store of system
   */
  const store = createStore(
    rootReducer,
    initialState,
    bindMiddleware([sagaMiddleware])
  );

  store.runSaga = () => {
    // Avoid running twice
    if (store.saga) {
      return;
    }
    store.saga = sagaMiddleware.run(rootSaga);
  };

  store.stopSaga = async () => {
    // Avoid running twice
    if (!store.saga) {
      return;
    }
    store.dispatch(END);
    await store.saga.done;
    store.saga = null;
  };
  store.execSagaTasks = async (isServer, tasks) => {
    // run saga
    store.runSaga();
    // dispatch saga tasks
    tasks(store.dispatch);
    // Stop running and wait for the tasks to be done
    await store.stopSaga();
    // Re-run on client side
    if (!isServer) {
      store.runSaga();
    }
  };

  // Initial run
  store.runSaga();

  return store;
}

export default initStore;
