import axios from "axios";

export function requestGetCars() {
  console.log("request");
  return axios.request({
    method: "get",
    auth: {
      username: "Hasher",
      password: "L#(qc{f}TaJu4%4k",
    },
    url: "http://localhost:8080/cars",
  });
}

export function requestCarDetailsById(carId: any) {
  console.log("request");
  return axios.request({
    method: "get",
    auth: {
      username: "Hasher",
      password: "L#(qc{f}TaJu4%4k",
    },
    url: "http://localhost:8080/cars/details/" + carId,
  });
}

export function requestCarsByType(carType: string) {
  console.log("request");
  return axios.request({
    method: "get",
    auth: {
      username: "Hasher",
      password: "L#(qc{f}TaJu4%4k",
    },
    url: "http://localhost:8080/cars/" + carType,
  });
}
