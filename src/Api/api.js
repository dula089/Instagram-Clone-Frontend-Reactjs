import axios from "axios";

const API_URL="http://localhost:8080/user";

export const signup=async(userData)=>{
    return await axios.post("http://localhost:8080/user/signup",userData);
};
export const login=async(loginData)=>{
    return await axios.post("http://localhost:8080/user/login",loginData);
};