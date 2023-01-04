import { Routes, Route } from 'react-router-dom'
// styles
import './App.css';

// page components
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Resume from './pages/Resume/Resume'
import Projects from './pages/Projects/Projects'
import ProjectDetails from './pages/ProjectDetails/ProjectDetails'


function App() {
  return (
    <>
      <NavBar />
      <div id='main'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='resume' element={<Resume />} />
          <Route path='projects' element={<Projects />} />
          <Route 
            path='projects/:projectDetails' 
            element={<ProjectDetails />} 
          />
        </Routes>
      </div>
      <Footer />
    
    </>
  );
}

export default App;
