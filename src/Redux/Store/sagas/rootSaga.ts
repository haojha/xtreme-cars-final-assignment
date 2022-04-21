import { takeLatest } from "redux-saga/effects";
import {
  GET_ALL_CARS,
  GET_ALL_CARS_BY_TYPE,
  GET_CAR_DETAILS_BY_ID,
} from "../reducers/carsReducer";
import {
  handleGetCarDetailsById,
  handleGetCars,
  handleGetCarsByType,
} from "./handlers/cars";

export function* watcherSaga() {
  yield takeLatest(GET_ALL_CARS, handleGetCars);
  yield takeLatest(GET_CAR_DETAILS_BY_ID, handleGetCarDetailsById);
  yield takeLatest(GET_ALL_CARS_BY_TYPE, handleGetCarsByType);
}
