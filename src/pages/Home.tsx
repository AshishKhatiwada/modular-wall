import { motion } from "framer-motion";
import modularWallsImg from "../assets/bac.jpg";
import fencingImg from "../assets/fencing.webp";
import securityImg from "../assets/security.webp";
import installationImg from "../assets/installation.jpg";

import { Phone, Mail, ShieldCheck, Wrench, Clock, Award } from "lucide-react";

export default function Home() {
  const services = [
    {
      title: "Fencing Installation",
      description:
        "High-quality residential and commercial fencing installations across Perth.",
      img: fencingImg,
    },
    {
      title: "ModularWalls®",
      description:
        "Durable and customizable modular wall solutions for homes and businesses.",
      img: modularWallsImg,
    },
    {
      title: "Property Security",
      description:
        "Secure fencing and walls to keep your property safe and private.",
      img: securityImg,
    },
    {
      title: "Professional Installation",
      description:
        "Expert installation services for both fencing and modular walls, ensuring long-lasting results.",
      img: installationImg,
    },
  ];

  const whyChoose = [
    {
      icon: <ShieldCheck size={40} className="text-green-600 mb-4" />,
      title: "Quality Guaranteed",
      description:
        "We use only premium materials that meet Australian standards, ensuring durability and longevity.",
    },
    {
      icon: <Wrench size={40} className="text-green-600 mb-4" />,
      title: "Professional Installation",
      description:
        "Our skilled team delivers precise, efficient, and clean installations with attention to every detail.",
    },
    {
      icon: <Clock size={40} className="text-green-600 mb-4" />,
      title: "On-Time Delivery",
      description:
        "We respect your time — every project is completed on schedule with clear communication throughout.",
    },
    {
      icon: <Award size={40} className="text-green-600 mb-4" />,
      title: "Trusted Local Experts",
      description:
        "With years of experience serving Perth, we’re known for reliability, honesty, and customer satisfaction.",
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
        <video
          className="absolute top-0 left-0 w-full h-full object-cover brightness-125"
          src="/assets/hero.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        
        <div className="relative text-center text-white px-4 max-w-3xl">
           <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-red-600 animate-pulse">
            PERTH
           </h1>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            FENCING CONTRACTOR &{" "}
            <span className="text-green-400 animate-pulse">
              MODULARWALL SPECIALIST
            </span>
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Get in touch today for a free quote and upgrade your property with
            style and security.
          </p>
          <div className="flex justify-center gap-4 mt-6 flex-wrap">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="tel:+61412345678"
              className="border-2 border-green-600 text-white px-6 py-3 rounded-xl font-semibold inline-block bg-transparent hover:bg-green-600 hover:text-white transition-colors duration-300 shadow-md hover:shadow-xl"
            >
              Call Us <Phone size={16} className="inline ml-2" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              className="border-2 border-green-600 text-white px-6 py-3 rounded-xl font-semibold inline-block bg-transparent hover:bg-green-600 hover:text-white transition-colors duration-300 shadow-md hover:shadow-xl"
              href="/contact"
            >
              Get a Free Quote <Mail size={16} className="inline ml-2" />
            </motion.a>
          </div>
        </div>
      </motion.section>

      {/* ModularWalls® Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
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
              At Perth Fencing Specialists, we proudly supply and install
              ModularWalls®, Australia’s #1 modular fencing and walling system.
              Engineered to deliver the look of a premium masonry wall at a
              fraction of the cost, ModularWalls offer exceptional durability,
              design flexibility, and acoustic performance.
            </p>
            <p className="text-gray-700">
              Whether you need secure fencing or modular wall systems, our
              experienced team delivers professional service, custom solutions,
              and long-lasting results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">
            What We<span className="text-green-600"> Do </span>
          </h2>
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
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-4">
                  <h3 className="text-white text-xl font-bold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white text-sm">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Perth Fencing */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">
            Why Choose <span className="text-green-600">Perth Fencing</span>
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto my-6 rounded-full"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {whyChoose.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col items-center">
                  {item.icon}
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="py-20 bg-green-700 text-center text-white"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">Ready for a FREE Quote?</h2>
          <p className="text-lg mb-8">
            Get in contact with <span className="font-semibold">Perth Fencing</span> today!
          </p>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="/contact"
            className="bg-white text-green-700 font-semibold px-8 py-4 rounded-xl shadow-md hover:bg-green-100 transition-all duration-300"
          >
            Get a Free Quote
          </motion.a>
        </div>
      </motion.section>
    </>
  );
}
