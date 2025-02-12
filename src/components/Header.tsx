import { useEffect, useState } from "react"
import { Section } from "../app/App";

export default function Header({ sections, sectionRefs }: { sections: Section[]; sectionRefs: any }) {

  const [isOpen, setIsOpen] = useState(true);
  const [activeSection, setActiveSection] = useState<string>(window.location.hash.slice(1) || "home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setActiveSection(sectionId); // Perbarui active section
            window.history.replaceState(null, "", `#${sectionId}`); // Perbarui URL
          }
        });
      },
      { threshold: 0.6 } // Elemen dianggap terlihat jika 60% masuk viewport
    );

    // Observasi setiap elemen yang direferensikan
    Object.values(sectionRefs.current).forEach((ref: any) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect(); // Membersihkan observer saat komponen di-unmount
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header id="header" className={`header dark-background d-flex flex-column ${isOpen ? 'header-show' : ''}`}>
    <i onClick={toggleMenu} className="header-toggle d-xl-none bi bi-list"></i>

    <div className="profile-img">
      <img src="/img/my-profile-img.jpg" alt="" className="img-fluid rounded-circle"/>
    </div>

    <a href="index.html" className="logo d-flex align-items-center justify-content-center">
      {/* <img src="assets/img/logo.png" alt="">  */}
      <h1 className="sitename">Feri Irawansyah</h1>
    </a>

    <div className="social-links text-center">
      <a href="#" className="twitter"><i className="bi bi-twitter-x"></i></a>
      <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
      <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
      <a href="#" className="google-plus"><i className="bi bi-skype"></i></a>
      <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
    </div>

    <nav id="navmenu" className="navmenu">
      <ul>
        {sections?.map((section: any) => (
          <li key={section.id}>
            <a
            className={activeSection === section.id ? "active" : ""}
              href={`#${section.id}`}
            ><i className={`${section.icon} navicon`}></i>
              {section.title}
            </a>
          </li>
        ))}
        {/* <li><a href="#home" className="active"><i className="bi bi-house navicon"></i>Home</a></li>
        <li><a href="#about"><i className="bi bi-person navicon"></i> About</a></li>
        <li><a href="#resume"><i className="bi bi-file-earmark-text navicon"></i> Resume</a></li>
        <li><a href="#portfolio"><i className="bi bi-images navicon"></i> Portfolio</a></li>
        <li><a href="#services"><i className="bi bi-hdd-stack navicon"></i> Services</a></li> */}
        {/* <li className="dropdown"><a href="#"><i className="bi bi-menu-button navicon"></i> <span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
          <ul>
            <li><a href="#">Dropdown 1</a></li>
            <li className="dropdown"><a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
              <ul>
                <li><a href="#">Deep Dropdown 1</a></li>
                <li><a href="#">Deep Dropdown 2</a></li>
                <li><a href="#">Deep Dropdown 3</a></li>
                <li><a href="#">Deep Dropdown 4</a></li>
                <li><a href="#">Deep Dropdown 5</a></li>
              </ul>
            </li>
            <li><a href="#">Dropdown 2</a></li>
            <li><a href="#">Dropdown 3</a></li>
            <li><a href="#">Dropdown 4</a></li>
          </ul>
        </li>
        <li><a href="#contact"><i className="bi bi-envelope navicon"></i> Contact</a></li> */}
      </ul>
    </nav>
    <nav className="footer-nav">
      <ul className="list-unstyled">
        <li className="copyright">
          <p>© <span>Copyright</span> <strong className="px-1 sitename">iPortfolio</strong> <span>All Rights Reserved</span></p>
        </li>
        <li className="credits">
          <img src="/img/logo-ss.png" alt="" />
          <a href="https://github.com/Snakesystem">Snakesystem</a>
        </li>
      </ul>
    </nav>

  </header>
  )
}
