import './App.css'
import OurCard from './components/home/OurCard'

import { v4 as uuidv4 } from 'uuid';
import OurHeader from './components/home/OurHeader'
import OurIntro from './components/home/OurIntro'
import OurFirstCard from './components/home/OurFirstCard'
import OurBelowSection from './components/home/OurBelowSection'
import OurFooter from './components/home/OurFooter';
import OurLastCard from './components/home/OurLastCard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/home/Home';

function App() {
  uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

  return (
    <Router>
      <body>
        <Switch>
          
        </Switch>
      </body>
    </Router>
  )
}

export default App
