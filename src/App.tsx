import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import NavLink from "./components/NavLink";

import Home from "./pages/Home";
import Services from "./pages/Services";
import ModularWalls from "./pages/ModularWalls";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import logo from "./assets/logo.png"; // Ensure you have a logo image in the assets folder

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["Home", "Services", "ModularWalls", "Gallery", "About", "Contact"];

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
            {links.map((link) => (
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
        <AnimatePresence>
          {mobileOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black z-40"
                onClick={() => setMobileOpen(false)}
              />

              {/* Sliding Panel */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white z-50 shadow-2xl p-6 flex flex-col"
              >
                {/* Close Button */}
                <button
                  className="self-end mb-6 text-2xl font-bold"
                  onClick={() => setMobileOpen(false)}
                >
                  ×
                </button>

                {/* Menu Links */}
                <div className="flex flex-col space-y-4">
                  {links.map((link, i) => (
                    <motion.div
                      key={link}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.3 }}
                      className="group"
                    >
                      <NavLink
                        to={`/${link === "Home" ? "" : link.toLowerCase()}`}
                        className="text-lg font-semibold px-4 py-2 rounded-md hover:bg-green-100 hover:text-green-700 transition-all duration-300"
                        onClick={() => setMobileOpen(false)}
                      >
                        {link}
                      </NavLink>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
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
        <p><img
        src={logo} 
        alt="Perth Fencing Specialists Logo"
        className="h-5 w-fit mx-auto md:mx-0"
      />{new Date().getFullYear()} Perth Fencing Specialists. All rights reserved.</p>
      </motion.footer>
    </div>
  );
}
