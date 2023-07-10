import { useState } from 'react'
import './App.css'
import  Nav  from './Components/Nav/Nav';
import  Home from './Components/Home/Home';
import  About from './Components/About/About';
import  Skills  from './Components/Skills/Skills';
import Project from './Components/Projects/Project';
import Contact from './Components/Contact/Contact';


function App() {
  

  return (
    <div>
    
      <Home/>
      <Nav/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default App
