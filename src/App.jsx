import React, { useState } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import NotFoundPage from './Pages/NotFoundPage';
import Videos from './pages/Videos/Videos';

function App() {
  const userRegister = JSON.parse(localStorage.getItem('userRegister'))
  const userLogin = JSON.parse(localStorage.getItem('userLogin'))
  console.log(userLogin);

    const handleSearch = (inputValue) => {
      console.log(inputValue);
    };


  return (
    <Routes>
      <Route path='/' element={userLogin&&userRegister?<Home/>:<Navigate to='/register'/>}/>
      <Route path="/video/:videoId" element = {<Videos/>}/>
     <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
  )
}

export default App
