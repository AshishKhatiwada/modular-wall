import { motion } from "framer-motion";

// Replace with your actual images (place them in assets folder)
import colorbondImg from "../assets/colorbond.webp";
import modularImg from "../assets/bac.jpg";
import poolImg from "../assets/pool.png";
import retainingImg from "../assets/retaining.jpg";
import gatesImg from "../assets/gates.jpg";
import asbestosImg from "../assets/asbestos.jpeg";

export default function Services() {
  const services = [
    {
      title: "Colorbond Fencing",
      desc: "Colorbond fencing offers a sleek, modern look with the strength to withstand Perth’s changing climate. Made from durable steel, it’s resistant to rust, warping, and pests – making it ideal for boundaries, privacy, and security. A low-maintenance, long-lasting solution for any property.",
      img: colorbondImg,
    },
    {
      title: "ModularWalls®",
      desc: "Transform your outdoor space with ModularWalls® – the modern alternative to brick or masonry walls. Designed to combine premium aesthetics with practical functionality, ModularWalls® offer acoustic insulation, integrated retaining, and a sleek finish that enhances privacy and adds value to any property.",
      img: modularImg,
    },
    {
      title: "Pool Fencing",
      desc: "Our pool fencing solutions are designed with safety and style in mind. Fully compliant with Australian standards, our fences ensure maximum security around your pool area while blending seamlessly with your outdoor design. Choose from modern, durable, and low-maintenance options for peace of mind and a stunning finish.",
      img: poolImg,
    },
    {
      title: "Retaining Walls",
      desc: "Retaining walls provide essential support for sloped landscapes while adding structure and style to your outdoor space. Built to handle soil pressure and harsh weather, they’re ideal for erosion control, garden edging, and level changes. A durable, long-term solution for Perth properties.",
      img: retainingImg,
    },
    {
      title: "Gates",
      desc: "Quality gate installations that enhance security, privacy, and access to your property. Built for Perth’s climate using durable materials, our gates are ideal for driveways, side access, and front entrances. A practical, long-lasting solution for homes and businesses across Perth.",
      img: gatesImg,
    },
    {
      title: "Asbestos Removal",
      desc: "Safe and professional asbestos removal for homes and businesses across Perth. We handle inspections, removal, and disposal in compliance with WA regulations. Protect your property and health with reliable asbestos solutions backed by experienced, licensed professionals.",
      img: asbestosImg,
    },
  ];

  const steps = [
    {
      number: "1",
      title: "On-Site Consultation",
      desc: "We visit your property to assess the site and discuss your vision. You’ll receive expert advice and a clear quote—free of charge.",
    },
    {
      number: "2",
      title: "Design and Approval",
      desc: "We create a custom retaining wall plan that suits your space and meets all local regulations. Permits and approvals? We’ve got it covered.",
    },
    {
      number: "3",
      title: "Build and Finish",
      desc: "Our team gets to work using quality materials and proven techniques. We finish with a thorough clean-up and final inspection for your peace of mind.",
    },
  ];

  const reasons = [
    "Locally Owned & Operated",
    "Availability From 2 Weeks",
    "Colorbond Fencing & Gates, Retaining Walls & Asbestos Removal & ModularWalls® Specialists",
    "Servicing Perth Metro & Surrounding Suburbs",
  ];

  return (
    <>
      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          {/* Section Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our <span className="text-green-600">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto mb-12"
          >
            We provide premium fencing solutions tailored to your needs – from
            modern modular walls to pool fencing and durable Colorbond fences.
          </motion.p>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-10">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all text-center group overflow-hidden"
              >
                {/* Service Image */}
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Card Content */}
                <div className="p-8">
                  <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                  <p className="text-gray-600">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Retaining Wall Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-12"
          >
            Retaining Wall <span className="text-green-600">Process</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-gray-50 rounded-xl shadow-md p-8 text-left relative"
              >
                <div className="absolute -top-5 left-5 bg-green-600 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          {/* Section Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Why Customers Choose <span className="text-green-600">Perth Fencing Specialists</span>
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Perth Fencing Specialists is trusted by homeowners and businesses for reliable,
            high-quality fencing and retaining wall solutions.
          </p>

          {/* Reasons Grid */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {reasons.map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all"
              >
                <h3 className="text-lg font-semibold text-gray-800">{reason}</h3>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.a
            href="tel:0400000000" // Replace with your number
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-green-600 text-white px-8 py-4 rounded-full shadow-lg hover:bg-green-700 transition"
          >
            Get a Free Consultation
          </motion.a>
        </div>
      </section>
    </>
  );
}
