import { motion } from 'framer-motion'
import { Section } from '../App';

export default function About({ section, sectionRefs }: { section: Section; sectionRefs: any }) {
  return (
    <motion.section id="about" 
        className="about section"
        initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        ref={(el) => (sectionRefs.current[section.id] = el)}>

      <div className="container section-title" data-aos="fade-up">
        <h2>About</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
            <img src="assets/img/my-profile-img.jpg" className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-8 content">
            <h2>UI/UX Designer &amp; Web Developer.</h2>
            <p className="fst-italic py-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>1 May 1995</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+123 456 7890</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>New York, USA</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>30</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>email@example.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
            <p className="py-3">
              Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
              Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque.
            </p>
          </div>
        </div>

      </div>

    </motion.section>
  )
}
