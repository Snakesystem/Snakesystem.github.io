import { Helmet } from 'react-helmet-async'
import Footer from '../components/Footer'
import Header from '../components/Header'
import About from './pages/About'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Skils from './pages/Skils'
import Stats from './pages/Stats'
import { useEffect, useRef } from 'react'
import Portfolio from './pages/Portfolio'

export interface Section {
  id: string;
  title: string;
  icon?: string;
}

const sections: Section[] = [
  { id: 'home', title: 'Home', icon: 'bi bi-house' },
  { id: 'about', title: 'About', icon: 'bi bi-person' },
  { id: 'resume', title: 'Resume', icon: 'bi bi-file-earmark' },
  { id: 'portfolio', title: 'Portfolio', icon: 'bi bi-images' },
];

function App() {

  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            window.history.replaceState(null, "", `#${sectionId}`);
          }
        });
      },
      { threshold: 0.6 } // Elemen dianggap terlihat jika 60% terlihat di viewport
    );

    // Observasi setiap elemen yang direferensikan
    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect(); // Membersihkan observer saat komponen unmount
  }, []);

  return (
    <div className="index-page">
      <Helmet>
        <title>Feri Irawansyah | Snakesystem</title>
        <meta name="description" content="Feri Irawansyah | Snakesystem" data-rh="true"/>
        <link rel="canonical" href="/" />
      </Helmet>
      <Header sections={sections} sectionRefs={sectionRefs}/>
        <main className="main">
          <Home section={sections[0]} sectionRefs={sectionRefs}/>
          <About section={sections[1]} sectionRefs={sectionRefs}/>
          <Stats/>
          <Skils/>
          <Resume section={sections[2]} sectionRefs={sectionRefs}/>
          <Portfolio section={sections[2]} sectionRefs={sectionRefs}/>
        </main>
      <Footer/>
    </div>
  )
}

export default App
