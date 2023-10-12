import './App.css';
import { Header } from './Header';
import { Footer } from './Footer';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';





function App() {

  return (
    <Router>
      <div className="App">
        <Header />
          <Routes>
            <Route path='/' Component={HomePage} />
            <Route path='/contact' Component={Contact} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
