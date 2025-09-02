import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="p-8 container mx-auto"
    >
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <p>
        Perth Fencing Specialists are trusted local experts providing Colorbond,
        ModularWalls®, pool fencing, and more. We pride ourselves on delivering
        modern, durable, and affordable fencing solutions across Perth.
      </p>
    </motion.div>
  );
}
