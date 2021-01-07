import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Header, Footer, Home, Login, User, ProtectedRouter } from './components'
import { UserStorage } from './context/UserContext'
import './App.css'


export default function App() {
  return (
    <div >
      <Router>
        <UserStorage>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <ProtectedRouter path="conta/*" element={<User />} />
          </Routes>

          <Footer />
        </UserStorage>
      </Router>
    </div>
  )
}

