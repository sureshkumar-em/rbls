import React from 'react'
import Register from './components/Register'
import { Route,Routes } from 'react-router-dom'
import Login from './components/Login'
import Users from './components/users'
import Home from './components/Home'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/users' element={<Users/>}/>
      </Routes>
    </div>
  )
}

export default App