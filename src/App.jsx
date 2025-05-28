import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
