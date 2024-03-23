import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SignUp from  "./Pages/Authentication/SignUp";
import SignIn from './Pages/Authentication/SignIn';
import ForgotPassword from './Pages/Authentication/ForgotPassword';
import ResetPassword from './Pages/Authentication/ResetPassword';
import Home from './Pages/Home';
import SnackBar from './Components/SnackBar';

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<SignUp />}/>
      <Route path='/signin' element={<SignIn />}/>
      <Route path='/forgot_password' element={<ForgotPassword />}/>
      <Route path='/reset_password/:id' element={<ResetPassword />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/S' element={<SnackBar />}/>
    </Routes>
    </>
  )
}

export default App