import { takeLatest } from "redux-saga/effects";
import { GET_ALL_CARS } from "../reducers/carsReducer";
import { handleGetCars } from "./handlers/cars";

export function* watcherSaga() {
  yield takeLatest(GET_ALL_CARS, handleGetCars);
}
