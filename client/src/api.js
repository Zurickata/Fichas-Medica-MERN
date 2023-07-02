import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

export const getFichasActivas = async () => await API.get("/rutas/fichasActivas");

export const getFichasInactivas = async () => await API.get("/rutas/fichasInactivas");

export const loginUsuario = async (Usuario) => await API.post("/rutas/login", Usuario);

export const addFichas = async (Ficha) => await API.post("/rutas/addficha", Ficha);

export const addUsuario = async (Usuario) => await API.post("/rutas/register", Usuario);

export const deleteFicha = async (id) => await API.put(`/rutas/deleteficha/${id}`);

export const editFicha = async (id) => await API.put(`/rutas/editficha/${id}`);