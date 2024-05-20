import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router , Route ,Routes  } from 'react-router-dom';
import Home from './pages/home.jsx'
import './index.css'
import Login from './pages/login.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
)
