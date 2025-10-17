import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Facts from './Facts'
import NewFact from './NewFact'
import './App.css'
import Nav from './Nav'

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={< Facts/>}/> 
        <Route path="/new" element={< NewFact/>}/> 

      </Routes>
    </>
  )
}

export default App
