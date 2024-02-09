import { useState } from 'react'
import './App.css'
import { app } from './config/firebase.config'
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'
import { AuthProvider } from './context/AuthContext'
import SignUp from './pages/SignUp'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import DashBoard from './pages/DashBoard'

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

function App() {

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/home" element={<DashBoard />} />
          {/* Add more routes for other pages as needed */}
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App
