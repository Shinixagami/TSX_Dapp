/* this is the main directory used for routing*/

import React, {useState} from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './styles_global/app.css'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import HomePage from './main_pages/home';


/* NAVBAR IS NESTED */
import Navbar from './components_webpage/Navbar';
// <Navbar/>

/* new tsx syntax*/
export default function App() {
  return (

    <>
    <Router>

      <ToastContainer position="bottom-left" autoClose={3100}/>

      <Navbar/>
      
      <Routes>

         <Route path="/" element ={ <HomePage />} />
        
      </Routes>
      
    </Router>
    </>
    

  )
}

/*we no longer need an export default App at the bottom*/


