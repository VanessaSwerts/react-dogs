import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Header, Footer, Home, LoginForm, LoginCreate, LoginPasswordLost, LoginPasswordReset } from './components'
import { UserStorage } from './context/UserContext'
import './App.css'


export default function App() {

  return (
    <div >
      <Router>
        <UserStorage>
          <Header />

          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/login" component={LoginForm} exact />
            <Route path="/login/criar" component={LoginCreate} exact />
            <Route path="/login/perdeu" component={LoginPasswordLost} exact />
            <Route path="/login/resetar" component={LoginPasswordReset} exact />
          </Switch>

          <Footer />
        </UserStorage>
      </Router>
    </div>
  )
}

