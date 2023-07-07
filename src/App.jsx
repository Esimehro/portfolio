import { useState } from 'react'
import './App.css'
import { Nav } from './Components/Nav/Nav'
import { Home } from './Components/Home/Home'
import { About } from './Components/About/about'

function App() {
  

  return (
    <div>
    
      <Home/>
      <Nav/>
      <About/>
    </div>
  )
}

export default App
