
import "./App.css";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Home from "./Components/Home/Home";
import Post from "./Components/Post/Post";
import ForgotPass from "./Components/ForgotPass/ForgotPass";
import { Routes, Route } from "react-router-dom";
import Nav from "./Components/NavBar/Nav";
import MoreMenu from "./Components/MoreButton/MoreMenu";
import Table from "./Components/Table";
import Create from "./Components/Pages/Create/Create";
import EmojiiPicker from "./Components/Pages/EmojiPicker/EmojiPicker";


import React from "react";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/forgot" element={<ForgotPass />} />
        <Route path="/table" element={<Table />} />
        <Route path="/nav" element={<Nav />} />
        <Route path="/more" element={<MoreMenu />} />
        <Route path="/create" element={<Create />} />
        <Route path="/emoji" element={<EmojiiPicker />} />
      </Routes>
    </div>
  );
}

export default App;
