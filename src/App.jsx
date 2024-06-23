import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AdminHome from './components/admincomponents/AdminHome';
import UserHome from './components/usercomponents/UserHome';
import Signup from './components/admincomponents/Signup';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='adminHome' element={<AdminHome />} />
          <Route path='userHome' element={<UserHome />} />
          <Route path='adminSignup' element={<Signup />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
