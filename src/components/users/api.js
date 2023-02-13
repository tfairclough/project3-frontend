import apiUrl from "./apiConfig";
import axios from "axios";

// api to send login details and return a key and user details
export const loginUser = (credentials) => {
    return axios.post(`${apiUrl}/login`, credentials);
  };

// api to get all users
export const getAllUsers = () => {
    return axios.get(`${apiUrl}/users`)
}  
// api to create a user
export const createNewUser = (userDetails) => {
    return axios.post(`${apiUrl}/register`, userDetails)} 

// api to create seed users
export const registerAllUsers = (userDetails) => {
    return axios.post(`${apiUrl}/registerUsers`, userDetails)} 
<<<<<<< HEAD
    
// api to check username
export const compareUsername = (userDetails) => {
    return axios.post(`${apiUrl}/users`, userDetails)} 
=======

>>>>>>> 2edc84f92406297f46b36b9732c0ea5286ac78dc
    
      
