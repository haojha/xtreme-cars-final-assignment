export const GET_ALL_CARS = "GET_ALL_CARS";
export const SET_ALL_CARS = "SET_ALL_CARS";

let initialState = {
  cars: [],
};

export default (state: any = initialState, action: any) => {
  console.log(action);
  switch (action.type) {
    case SET_ALL_CARS:
      const { cars } = action;
      return { ...state, cars };
    default:
      return state;
  }
};
