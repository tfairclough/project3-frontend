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
export const createNewUser = (newUser) => {
    return axios.post(`${apiUrl}/register`, newUser)} 

// api to create seed users
export const registerAllUsers = (userDetails) => {
    return axios.post(`${apiUrl}/registerUsers`, userDetails)} 
    
// api to check username
export const compareUsername = (userDetails) => {
    return axios.post(`${apiUrl}/users`, userDetails)} 
    
      
// api to get all searched users
export const getSearchedUsers = (name) => {
    return axios.get(`${apiUrl}/search`, name)
}

// // Placeholder API for retrieving friends
// export const getUserFriends = (user) => {
//   return axios.get((`${apiUrl}/users:id`, name)}
