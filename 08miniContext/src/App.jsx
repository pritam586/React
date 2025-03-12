import { useState } from 'react'
import './App.css'
import UserContestProvider from './Context/UserContextProvider'
import Login from './Component/Login'
import Profile from './Component/Profile'

function App() {


  return (
    < UserContestProvider>
     <h1>Lorem ipsum dolor sit amet.</h1>
     <Login/>
     < Profile/>
    </ UserContestProvider>
  )
}

export default App
