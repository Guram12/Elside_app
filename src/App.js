import './App.css';
import { Header } from './Header';
import { Footer } from './Footer';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import ProjectPage  from './pages/ProjectPage';





function App() {

  return (
    <Router>
      <div className="App">
        <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/projects/*' element={<ProjectPage />} />

          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
