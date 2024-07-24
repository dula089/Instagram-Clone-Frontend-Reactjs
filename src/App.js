// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Home from "./Components/Home/Home";
import Post from "./Components/Post/Post";
import ForgotPass from "./Components/ForgotPass/ForgotPass";
import Nav from "./Components/NavBar/Nav";
import MoreMenu from "./Components/MoreButton/MoreMenu";
import Table from "./Components/Table";
import Create from "./Components/Pages/Create/Create";
import EmojiiPicker from "./Components/Pages/EmojiPicker/EmojiPicker";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import { PostProvider } from "./Components/Post/PostContext";

function App() {
  return (
   
    
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/home" element={<PostProvider><Home/></PostProvider>} />
            <Route path="/post" element={<PostProvider><Post/></PostProvider>} />
            <Route path="/forgot" element={<ForgotPass />} />
            <Route path="/table" element={<Table />} />
            <Route path="/nav" element={<Nav />} />
            <Route path="/more" element={<MoreMenu />} />
            <Route path="/create" element={<PostProvider><Create/></PostProvider>} />
            <Route path="/emoji" element={<EmojiiPicker />} />
          </Route>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      
   
  );
}

export default App;
