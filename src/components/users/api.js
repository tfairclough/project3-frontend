import apiUrl from "./apiConfig";
import axios from "axios";

export const getAllUsers = () => {
    return axios.get(`${apiUrl}/users`)
} 