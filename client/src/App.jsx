import './App.css'
import Home from './components/home/Home'
import Missing from './components/missing/Missing'
import Dashboard from './components/dashboard/Dashboard'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
          <Route exact path="*" element={<Missing />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App