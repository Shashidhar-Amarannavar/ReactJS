import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import './App.css';
import './Homescreen/Org.css'
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import ForgotPassword from './Components/ForgotPassword';
import Home from './Homescreen/Home';
import Organizations from './Homescreen/Organization';
import Activity from './Homescreen/Activity';
import Projects from './Homescreen/Projects';
import Tasks from './Homescreen/Tasks';
import Reports from './Homescreen/Reports';
import Nomatch from './Components/Nomatch';

function App() {
  const isAuthenticated = () => {
    return localStorage.getItem('authToken') !== null;
  }

  const ProtectedRoute = ({ element: Component, ...rest }) => {
    return isAuthenticated() ? Component : <Navigate to="/" />;
  };

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='forgotpassword' element={<ForgotPassword />} />
        <Route path='/' element={<ProtectedRoute element={<Home />} />} >
          <Route path='organizations' element={<Organizations />} />
          <Route path='activity' element={<Activity />} />
          <Route path='projects' element={<Projects />} />
          <Route path='tasks' element={<Tasks />} />
          <Route path='reports' element={<Reports />} />
        </Route>
        <Route path='*' element={<Nomatch />} />
      </Routes></>
  );
}

export default App;
