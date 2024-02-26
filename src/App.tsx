import './App.css'
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from './components/home/Home';
import BuyNow from './components/buy_now/BuyNow';
import Contact from './components/contact/Contact';

function App() {
  uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/buynow" element={<BuyNow/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
