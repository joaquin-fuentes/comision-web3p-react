import axios from "axios";

const clientAxios = axios.create({
  baseURL: "http://localhost:3000/api", // Cambiá por la URL de tu backend
  headers: {
    "Content-Type": "application/json",
  },
});

export default clientAxios;
