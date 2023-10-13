import './App.css';
import { Header } from './Header';
import { Footer } from './Footer';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import ProjectPage  from './pages/ProjectPage';
import OngoingPage from './pages/OngoingPage';





function App() {

  return (
    <Router>
      <div className="App">
        <Header />
          <Routes>
            <Route path='/' Component={HomePage} />
            <Route path='/contact' Component={Contact} />
            <Route path='/projects' Component={ProjectPage} />

          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
