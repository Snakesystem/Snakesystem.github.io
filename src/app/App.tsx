import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import About from './pages/About'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Skils from './pages/Skils'
import Stats from './pages/Stats'

function App() {

  return (
    <div className="index-page">
      <Header/>
        <main className="main">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/resume" element={<Resume/>} />
              <Route path="/skils" element={<Skils/>} />
              <Route path="/stats" element={<Stats/>} />
            </Routes>
          </BrowserRouter>
        </main>
      <Footer/>
    </div>
  )
}

export default App
