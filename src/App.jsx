
import { Routes, Route } from 'react-router-dom'
import Facts from './Facts'
import Show from './Show'
import './App.css'
import NewFact from './NewFact'
import Update from './Update'
import Header from './Header'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={< Facts/>}/> 
        <Route path="/facts" element={< Facts/>}/> 
        <Route path="/facts/:id" element={< Show/>}/> 
        <Route path="/facts/new" element={<NewFact/>}/> 
        <Route path="/facts/update/:id" element={<Update/>}/> 
      </Routes>
    </>
  )
}


export default App
