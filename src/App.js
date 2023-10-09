import './App.css';
import { Video } from './Video';
import { Header } from './Header';
import { Maintext } from './Maintext';
import { Projects } from './Projects';
import { Footer } from './Footer';
import { Partners } from './Partners';


function App() {

  return (
    <div className="App">
      <Header />
      <Video />
      <Maintext />
      <Projects />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
