import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Experience from "./Experience";
import About from "./About";
import Contact from "./Contact";

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-gray-800 text-white min-h-screen">
        <Navbar />
        <main className="container mx-auto py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}
