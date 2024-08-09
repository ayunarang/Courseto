import React from 'react'
import './App.css'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './Components/Login.jsx';
import Home from '../src/Components/Home.jsx';
import Signup from '../src/Components/Signup.jsx'
import CreateInstructor from '../src/Components/CreateInstructor.jsx'


const App = () => {

  return (

    <Router>
    <Routes>
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/signup" element={<Signup/>} />
      <Route exact path="/instructor" element={<CreateInstructor/>} />

      <Route exact path="/" element={<Home/>} />


    </Routes>

</Router>
  )
}

export default App








