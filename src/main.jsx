import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router , Route ,Routes  } from 'react-router-dom';
import Home from './pages/home.jsx'
import './index.css'
import Login from './pages/login.jsx'
import Signup from './pages/signup.jsx';
import VerificationPage from './pages/verification.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/verify-account' element={<VerificationPage/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
)
