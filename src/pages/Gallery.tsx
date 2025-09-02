import { motion } from "framer-motion";

export default function Gallery() {
  const images = ["/gallery1.jpg", "/gallery2.jpg", "/gallery3.jpg"];

  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">Our Work</h2>
      <div className="container mx-auto grid md:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <motion.img
            key={i}
            src={img}
            alt="Modular wall project"
            className="rounded-xl shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          />
        ))}
      </div>
    </section>
  );
}
