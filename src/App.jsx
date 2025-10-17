import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Facts from './Facts'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={< Facts/>}/> 

      </Routes>
    </>
  )
}

export default App
