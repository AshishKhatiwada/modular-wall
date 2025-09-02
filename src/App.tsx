import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import NavLink from "./components/NavLink";

import Home from "./pages/Home";
import Services from "./pages/Services";
import ModularWalls from "./pages/ModularWalls";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`sticky top-0 z-50 backdrop-blur-md transition-all duration-300 ${
          scrolled ? "bg-white/80 shadow-lg" : "bg-white/50"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          <NavLink to="/">
            <img
              src="https://perthfencingspecialists.au/wp-content/uploads/2025/07/150.png"
              alt="Perth Fencing Specialists Logo"
              className="h-10 w-auto"
            />
          </NavLink>

          {/* Desktop Links */}
          <div className="space-x-6 hidden md:flex">
            {["Home","Services","ModularWalls","Gallery","About","Contact"].map((link) => (
              <motion.div
                key={link}
                whileHover={{ y: -3, scale: 1.05 }}
                className="inline-block relative group"
              >
                <NavLink to={`/${link === "Home" ? "" : link.toLowerCase()}`}>
                  {link}
                </NavLink>
                {/* Underline animation */}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
              </motion.div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden px-2 py-1 border rounded"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="flex flex-col md:hidden bg-white shadow-lg"
          >
            {["Home","Services","ModularWalls®","Gallery","About","Contact"].map((link) => (
              <NavLink
                key={link}
                to={`/${link === "Home" ? "" : link.toLowerCase()}`}
                className="px-6 py-4 border-b hover:bg-green-50" 
                onClick={() => setMobileOpen(false)}
              >
                {link}
              </NavLink>
            ))}
          </motion.div>
        )}
      </motion.nav>

      {/* Page Routes */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/modularwalls" element={<ModularWalls />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-gray-900 text-gray-300 text-center py-6"
      >
        <p>© {new Date().getFullYear()} Perth Fencing Specialists. All rights reserved.</p>
      </motion.footer>
    </div>
  );
}
