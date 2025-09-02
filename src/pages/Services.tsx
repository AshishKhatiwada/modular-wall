import { motion } from "framer-motion";
import { Shield, PanelsTopLeft, Waves } from "lucide-react";

export default function Services() {
  const services = [
    { icon: <Shield size={40} />, title: "Colorbond Fencing", desc: "Durable & affordable fencing." },
    { icon: <PanelsTopLeft size={40} />, title: "ModularWalls®", desc: "Modern, stylish, and noise-reducing walls." },
    { icon: <Waves size={40} />, title: "Pool Fencing", desc: "Safe and stylish solutions." },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-6 rounded-2xl shadow-lg text-center"
          >
            <div className="text-green-600 mx-auto mb-4">{s.icon}</div>
            <h3 className="text-xl font-bold mb-2">{s.title}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
