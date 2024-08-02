import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import ForgotPassword from './Components/ForgotPassword';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='forgotpassword' element={<ForgotPassword />} />
      </Routes>
    </div>
  );
}

export default App;
