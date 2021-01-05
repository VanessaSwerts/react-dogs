import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Header, Footer, Home, Login } from './components'
import './App.css'


export default function App() {

  return (
    <div >
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact >
            <Home />
          </Route>

          <Route path="/login">
            <Login />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

