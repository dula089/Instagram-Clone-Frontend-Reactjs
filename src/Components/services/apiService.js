import axios from "axios";

export const login = async (username, password) => {
  try {
    const response = await axios.post("http://localhost:8080/auth/login", {
      userName: username,
      password: password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const getProtectedData = async () => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch("http://localhost:8080/user/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const createPost = async (postData) => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.post("http://localhost:8080/posts/create", postData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchAllPosts = async () => {
  const token = localStorage.getItem("token");
  try {
    const response = await fetch("http://localhost:8080/posts/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};


