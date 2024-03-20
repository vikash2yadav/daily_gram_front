import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SignUp from  "./Pages/Authentication/SignUp";
 
const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<SignUp />}/>
    </Routes>
    </>
  )
}

export default App