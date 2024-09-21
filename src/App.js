import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Components/redux/Store";
import "./App.css";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
// import Home from './Components/EHome/Home';
// import Post from './Components/ExPost/Post';
import Home from "./Components/Home/Home";
import Post from "./Components/Post/Post";
import ForgotPass from "./Components/ForgotPass/ForgotPass";
import Nav from "./Components/NavBar/Nav";
import MoreMenu from "./Components/MoreButton/MoreMenu";
import Table from "./Components/Table";
import Create from "./Components/Pages/Create/Create";
import EmojiiPicker from "./Components/Pages/EmojiPicker/EmojiPicker";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Message from "./Components/Pages/Message/Message";
import Settings from "./Components/Pages/Settings/Settings";
import Profile from "./Components/Pages/Profile/Profile";
import Options from "./Components/Pages/Profile/Options/Options";
import ProfileHeader from "./Components/Home/ProfileHeader/ProfileHeader";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/options" element={<Options />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/post" element={<Post />} />
          <Route path="/forgot" element={<ForgotPass />} />
          <Route path="/table" element={<Table />} />
          <Route path="/nav" element={<Nav />} />
          <Route path="/more" element={<MoreMenu />} />
          <Route path="/create" element={<Create />} />
          <Route path="/emoji" element={<EmojiiPicker />} />
        </Route>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/message" element={<Message />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Provider>
  );
}

export default App;
