// import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
import ForgotPass from './Components/ForgotPass';
import { Routes,Route} from 'react-router-dom';


function App() {

  return ( 
    <div>
      <Routes>
         <Route path='/' element={<Login/>} />
         <Route path='/signup' element={<Signup/>} />
         <Route path='/forgot' element={<ForgotPass/>} />
       </Routes>
      {/* <Login></Login>
      <Signup></Signup>
     <ForgotPass></ForgotPass> */}
    </div>
  );
}

export default App;
