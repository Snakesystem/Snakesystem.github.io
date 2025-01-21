import { motion } from 'framer-motion';
import { Section } from '../App';

export default function Home({ section, sectionRefs }: { section: Section; sectionRefs: any }) {
  return (
    <motion.section 
        id="home" 
        initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        className="hero section dark-background" 
        ref={(el) => (sectionRefs.current[section.id] = el)}>

      <img src="/img/hero-bg.jpg" alt="" data-aos="fade-in" className=""/>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <h2>Feri Irawansyah</h2>
        <p>I'm <span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer">Designer</span><span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span><span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span></p>
      </div>

    </motion.section>
  )
}
