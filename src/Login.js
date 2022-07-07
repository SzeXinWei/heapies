import React from 'react'
import './login.css'
import { loginUrl } from './spotify'

function Login() {
  return (
    <div className = "login">
      <h1>LET US IN, PLEASE</h1>
      <a href = {loginUrl}>LOGIN</a>
    </div>
  )
}

export default Login



