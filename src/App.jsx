import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Facts from './Facts'
import Show from './Show'
import './App.css'
import Nav from './Nav'
import NewFact from './NewFact'

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/facts" element={< Facts/>}/> 
        <Route path="/facts/:id" element={< Show/>}/> 
        <Route path="/facts/new" element={<NewFact/>}/> 
      </Routes>
    </>
  )
}


export default App
