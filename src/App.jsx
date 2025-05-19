import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AdminHome from './pages/AdminHome';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
// import './App.css';
import AdminkitManagement from '../src/sensor_kit/adminkitManagement';
import Userkittracker from '../src/sensor_kit/userkittracker';
import Register from './pages/Register';
import UserHome from './pages/UserHome';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/AdminHome" element={<AdminHome />} />
          <Route path="/sensorKit" element={<AdminkitManagement />} />
          <Route path="/map" elemeent={<map />} />
          <Route path="/register" element={<Register />} />
          <Route path="/userkittracker" element={<Userkittracker />} />
          <Route path="/UserHome" element={<UserHome />} />       
      
          {/* Add more routes as needed */}
        </Routes>
          
      </div>
    </Router>
  );
}

export default App;