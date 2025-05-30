import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx';
import About from './pages/About.jsx';
import Facility from './pages/Facility.jsx';
import Booking from './pages/Booking.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/facility'  element={<Facility/>}/>
          <Route path='/facility/:id'  element={<Booking/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
