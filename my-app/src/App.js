import './App.css';
import './Homescreen/Org.css'
import { Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import ForgotPassword from './Components/ForgotPassword';
import Home from './Homescreen/Home';
import Activity from './Homescreen/Activity';
import Projects from './Homescreen/Projects';
import Tasks from './Homescreen/Tasks';
import Reports from './Homescreen/Reports';

function App() {
  return (
    <>
      <Routes>            
        <Route path='/' element={<Login />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='forgotpassword' element={<ForgotPassword />} />
        <Route path='organization' element={<Home />} />
        <Route path='activity' element={<Activity />} />
        <Route path='projects' element={<Projects />} />
        <Route path='tasks' element={<Tasks />} />
        <Route path='Reports' element={<Reports />} />
      </Routes> 
    </>
  );
}

export default App;
