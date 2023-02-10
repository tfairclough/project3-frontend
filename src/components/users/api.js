import apiUrl from "./apiConfig";
import axios from "axios";

// api to get all users
export const getAllUsers = () => {
    return axios.get(`${apiUrl}/users`)
} 
// api to create a user
export const createNewUser = (userDetails) => {
    return axios.post(`${apiUrl}/register`, userDetails)} 

// api to create a user
export const registerAllUsers = (userDetails) => {
    return axios.post(`${apiUrl}/registerUsers`, userDetails)} 
