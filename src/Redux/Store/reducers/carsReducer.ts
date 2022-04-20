export const GET_ALL_CARS = "GET_ALL_CARS";
export const SET_ALL_CARS = "SET_ALL_CARS";
export const GET_CAR_DETAILS_BY_ID = "GET_CAR_DETAILS_BY_ID";
export const SET_CAR_DETAILS_BY_ID = "SET_CAR_DETAILS_BY_ID";

let initialState: {
  cars: any;
  carDetail?: any;
} = {
  cars: [],
  carDetail: {},
};

export default (state: any = initialState, action: any) => {
  console.log(action);
  switch (action.type) {
    case SET_ALL_CARS:
      const { cars } = action;
      return { ...state, cars };
    case SET_CAR_DETAILS_BY_ID:
      const { carDetail } = action;
      return { ...state, carDetail };
    default:
      return state;
  }
};
