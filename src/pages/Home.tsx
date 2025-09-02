import { motion } from "framer-motion";
import modularWallsImg from "../assets/bac.jpg";
import fencingImg from "../assets/fencing.webp";
import securityImg from "../assets/security.webp";
import installationImg from "../assets/installation.jpg";
export default function Home() {
  const services = [
    {
      title: "Fencing Installation",
      description: "High-quality residential and commercial fencing installations across Perth.",
      img: fencingImg,
    },
    {
      title: "ModularWalls®",
      description: "Durable and customizable modular wall solutions for homes and businesses.",
      img: modularWallsImg,
    },
    {
      title: "Property Security",
      description: "Secure fencing and walls to keep your property safe and private.",
      img: securityImg,
    },
    {
      title: "Professional Installation",
      description: "Expert installation services for both fencing and modular walls, ensuring long-lasting results.",
      img: installationImg,
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      >
        {/* Video background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/assets/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>

        {/* Hero content */}
        <div className="relative text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-6">
            FENCING CONTRACTOR & MODULARWALL SPECIALISTS
          </h1>
          <p className="text-xl mb-6">GET IN TOUCH FOR A FREE QUOTE TODAY!</p>
          <div className="flex justify-center gap-4 mt-6">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="tel:+61412345678"
              className="border-2 border-green-600 text-white px-6 py-3 rounded-xl font-semibold inline-block bg-transparent hover:bg-green-600 hover:text-white transition-colors duration-300"
            >
              Call Us
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              className="border-2 border-green-600 text-white px-6 py-3 rounded-xl font-semibold inline-block bg-transparent hover:bg-green-600 hover:text-white transition-colors duration-300"
              href="/contact"
            >
              Get a Free Quote
            </motion.a>
          </div>
        </div>
      </motion.section>

      {/* ModularWalls® & Fencing Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
          {/* Image */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <img
              src={modularWallsImg}
              alt="ModularWalls®"
              className="rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              ModularWalls® & Fencing Solutions
            </h2>
            <p className="text-gray-700 mb-4">
              At Perth Fencing Specialists, we proudly supply and install ModularWalls®, Australia’s #1 modular fencing and walling system.
              Engineered to deliver the look of a premium masonry wall at a fraction of the cost, ModularWalls offer exceptional durability, design flexibility, and acoustic performance. Whether you’re upgrading your home’s street appeal, building a quiet backyard oasis, or securing your business premises, our team provides professional installation across the Perth metro area.

            </p>
            <p className="text-gray-700">
              Whether you need secure fencing or modular wall systems, our experienced team
              delivers professional service, custom solutions, and long-lasting results.
            </p>
          </motion.div>
        </div>
      </section>
      
      <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">What We Do</h2>
        <div className="w-24 h-1 bg-green-600 mx-auto my-6 rounded-full"></div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group h-72"
            >
              {/* Background Image */}
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-4">
                <h3 className="text-white text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-white text-sm">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
