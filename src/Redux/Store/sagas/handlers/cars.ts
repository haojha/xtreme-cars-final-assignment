import { call, put } from "redux-saga/effects";
import { SET_ALL_CARS } from "../../reducers/carsReducer";
import { requestGetCars } from "../request/cars";

export function* handleGetCars(action: any): any {
  try {
    console.log("handleGetUser from handler");
    const response = yield call(requestGetCars);
    console.log("all cars", response);
    const { data } = response;
    yield put({ type: SET_ALL_CARS, cars: data });
  } catch (error) {
    console.log(error);
  }
}
