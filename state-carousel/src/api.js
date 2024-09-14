import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.1.85:3000/api",
});

export const getStates = () => api.get("/states");