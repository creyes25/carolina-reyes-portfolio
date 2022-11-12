import { Routes, Route } from 'react-router-dom'
// styles
import './App.css';

// page components
import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Resume from './pages/Resume/Resume'
import Projects from './pages/Projects/Projects'


function App() {
  return (
    <>
      <NavBar />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='resume' element={<Resume />} />
          <Route path='projects' element={<Projects />} />
        </Routes>
      </div>
    
    </>
  );
}

export default App;
