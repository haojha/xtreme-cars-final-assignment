import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import carsReducer from "./reducers/carsReducer";
import { watcherSaga } from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const rootReducer = combineReducers({
  cars: carsReducer,
});

const store = createStore(rootReducer, {}, applyMiddleware(...middleware));
sagaMiddleware.run(watcherSaga);
export type RootState = ReturnType<typeof rootReducer>;
export default store;
