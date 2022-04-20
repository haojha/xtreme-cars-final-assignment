import { takeLatest } from "redux-saga/effects";
import { GET_ALL_CARS, GET_CAR_DETAILS_BY_ID } from "../reducers/carsReducer";
import { handleGetCarDetailsById, handleGetCars } from "./handlers/cars";

export function* watcherSaga() {
  yield takeLatest(GET_ALL_CARS, handleGetCars);
  yield takeLatest(GET_CAR_DETAILS_BY_ID, handleGetCarDetailsById);
}
