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

    
// api to edit post
export const editPost = (postBody) => {
    return axios.patch(`${apiUrl}/posts/edit/:id`, postBody)
}   
