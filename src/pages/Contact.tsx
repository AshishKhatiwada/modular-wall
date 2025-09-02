import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="p-8 container mx-auto">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <form className="grid gap-4 max-w-lg">
        <input type="text" placeholder="Your Name" className="border p-3 rounded-lg" />
        <input type="email" placeholder="Your Email" className="border p-3 rounded-lg" />
        <textarea placeholder="Your Message" rows={4} className="border p-3 rounded-lg" />
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-green-600 text-white px-6 py-3 rounded-xl"
        >
          Send Message
        </motion.button>
      </form>
    </section>
  );
}
