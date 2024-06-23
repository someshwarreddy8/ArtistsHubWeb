import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AdminHome from './components/admincomponents/AdminHome';
import UserHome from './components/usercomponents/UserHome';
import Signup from './components/admincomponents/Signup';
import Signin from './components/admincomponents/Signin';
import Dashboard from './components/admincomponents/Dashboard';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='adminHome' element={<AdminHome />} />
          <Route path='adminSignup' element={<Signup />} />
          <Route path='adminSignin' element={<Signin />} />
          <Route path='adminDashboard' element={<Dashboard />} />

          <Route path='userHome' element={<UserHome />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
