import {BrowserRouter, Routes, Route} from "react-router-dom"
import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { Home, Projects, Experiences, Contact, Misc} from "./pages";
import { Navbar, ProjCard, ProjPage , ExpCard, ExpPage} from './components'

function App() {
  return (
    <BrowserRouter>
     <Navbar></Navbar>
     <Routes>
      <Route path = "/" element = {<Home />}></Route>
      <Route path = "/projects" element = {<Projects />}></Route>
      <Route path = "/projects/:id" element = { <ProjPage/>} />
      <Route path = "/experiences" element = {<Experiences/>}/>
      <Route path = "/experiences/:id" element = { <ExpPage/>}/>
      <Route path = "/contact" element = {<Contact/>}/>
      <Route path = "/knWlxLz131TWOYuv" element = {<Misc/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
