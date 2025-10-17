import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Facts from './Facts'
import Show from './Show'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/facts" element={< Facts/>}/> 
        <Route path="/facts/:id" element={< Show/>}/> 
      </Routes>
    </>
  )
}

export default App
