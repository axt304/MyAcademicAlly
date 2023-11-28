import './App.css';
import Home from './components/home/Home';
import Missing from './components/missing/Missing';
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/login/Login';  // Added import for Login
import Signup from './components/signup/Signup';  // Added import for Signup
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />  // Added route for Login
          <Route path="/signup" element={<Signup />} />  // Added route for Signup
          <Route path="*" element={<Missing />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

