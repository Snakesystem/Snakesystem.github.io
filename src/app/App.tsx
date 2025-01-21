import { Helmet } from 'react-helmet-async'
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
      <Helmet>
        <title>Feri Irawansyah | Snakesystem</title>
        <meta name="description" content="Feri Irawansyah | Snakesystem" data-rh="true"/>
        <link rel="canonical" href="/" />
      </Helmet>
      <Header/>
        <main className="main">
          <Home/>
          <About/>
          <Stats/>
          <Skils/>
          <Resume/>
        </main>
      <Footer/>
    </div>
  )
}

export default App
