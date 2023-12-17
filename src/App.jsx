import React, { useState } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home.jsx';
import Register from './Pages/Register/Register.jsx';
import Login from './Pages/Login/Login.jsx';
import NotFoundPage from './Pages/NotFoundPage.jsx';
import Videos from './Pages/Videos/Videos.jsx';
import Layout from './Pages/Layout.jsx';

function App() {
  const userRegister = JSON.parse(localStorage.getItem('userRegister'))
  const userLogin = JSON.parse(localStorage.getItem('userLogin'))
  console.log(userLogin);

    const handleSearch = (inputValue) => {
      console.log(inputValue);
    };


  return (
    <Routes>
      <Route element={<Layout/>}>
      <Route path='/' element={userLogin&&userRegister?<Home/>:<Navigate to='/register'/>}/>
      <Route path="/video/:videoId" element={<Videos />}/>
      </Route>

     {/* <Route path='/' element={<Home/>}/> */}
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
  )
}

export default App
