import React from 'react'
import { Route, Switch } from 'react-router-dom'
import {LoginForm, LoginCreate, LoginPasswordLost, LoginPasswordReset} from '../'

export default function Login() {
  return (
    <div>      
      <Switch> 
        <Route path="/" component={LoginForm} />       
        <Route path="criar" component={LoginCreate} />
        <Route path="perdeu" component={LoginPasswordLost} />
        <Route path="resetar" component={LoginPasswordReset} />        
      </Switch>
    </div>
  )
}