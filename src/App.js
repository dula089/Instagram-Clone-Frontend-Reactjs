// import logo from './logo.svg';
import "./App.css";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Home from "./Components/Home/Home";
import Post from "./Components/Post/Post";
import ForgotPass from "./Components/ForgotPass/ForgotPass";
import { Routes, Route } from "react-router-dom";
import Table from "./Components/Table";

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
      </Routes>
      {/* <Login></Login>
      <Signup></Signup>
     <ForgotPass></ForgotPass> */}
      {/* <Lifecyclea></Lifecyclea> */}
    </div>
  );
}

export default App;
