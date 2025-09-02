import { motion } from "framer-motion";
import aboutImg from "../assets/pool.png"; // Add your About image here
import FAQ from "../components/FaQ";

export default function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About <span className="text-green-600">Us</span>
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Perth Fencing Specialists are trusted local experts providing{" "}
            <span className="font-semibold">Colorbond</span>,{" "}
            <span className="font-semibold">ModularWalls®</span>, pool fencing,
            retaining walls, gates, and asbestos removal services.  
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            We pride ourselves on delivering modern, durable, and affordable
            fencing solutions across Perth. With a focus on quality workmanship
            and customer satisfaction, we help homeowners and businesses create
            safe, stylish, and lasting outdoor spaces.
          </p>
          <motion.a
            href="tel:0400000000" // Replace with your number
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-green-600 text-white px-8 py-4 rounded-full shadow-lg hover:bg-green-700 transition"
          >
            Call Us Today
          </motion.a>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl overflow-hidden shadow-lg"
        >
          <img
            src={aboutImg}
            alt="About Perth Fencing Specialists"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
         <FAQ />
    </section>
    
  );
}
