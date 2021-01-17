import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Header, Footer, Home, Login, User, ProtectedRouter, Photo, UserProfile, NotFound } from './components'
import { UserStorage } from './context/UserContext'
import './App.css'


export default function App() {
  return (
    <div className="App" >
      <Router>
        <UserStorage>
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login/*" element={<Login />} />
              <ProtectedRouter path="conta/*" element={<User />} />
              <Route path="foto/:id" element={<Photo />} />
              <Route path="perfil/:user" element={<UserProfile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </Router>
    </div>
  )
}

