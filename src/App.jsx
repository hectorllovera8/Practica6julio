import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Inicio from './pages/Inicio'
import Continentes from './pages/Continentes'
import Nosotros from './pages/Nosotros'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/continentes" element={<Continentes />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/continentes/:id" element={<Continentes/>} />
        </Routes>






      </BrowserRouter>
    </>
  )
}

export default App
