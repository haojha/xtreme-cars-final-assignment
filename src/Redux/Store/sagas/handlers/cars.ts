import { call, put } from "redux-saga/effects";
import {
  SET_ALL_CARS,
  SET_ALL_CARS_BY_TYPE,
  SET_CAR_DETAILS_BY_ID,
} from "../../reducers/carsReducer";
import {
  requestCarDetailsById,
  requestCarsByType,
  requestGetCars,
} from "../request/cars";

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

export function* handleGetCarDetailsById(action: any): any {
  try {
    console.log("handleGetUser from handler");
    const response = yield call(requestCarDetailsById, action.carId);
    console.log("all cars", response);
    const { data } = response;
    yield put({ type: SET_CAR_DETAILS_BY_ID, carDetail: data });
  } catch (error) {
    console.log(error);
  }
}

export function* handleGetCarsByType(action: any): any {
  try {
    console.log("handleGetUser from handler");
    const response = yield call(requestCarsByType, action.carType);
    console.log("all cars", response);
    const { data } = response;
    yield put({ type: SET_ALL_CARS_BY_TYPE, carsByType: data });
  } catch (error) {
    console.log(error);
  }
}
