import { motion } from "framer-motion";
import { useState } from "react";

// Import all images
import img1 from "../assets/gallery/1.jpg";
import img2 from "../assets/gallery/2.jpg";
import img3 from "../assets/gallery/3.jpg";
import img4 from "../assets/gallery/4.jpg";
import img5 from "../assets/gallery/5.jpg";
import img6 from "../assets/gallery/6.jpg";
import img7 from "../assets/gallery/7.jpg";
import img8 from "../assets/gallery/8.jpg";
import img9 from "../assets/gallery/9.jpg";
import img10 from "../assets/gallery/10.jpg";
import img11 from "../assets/gallery/11.jpg";
import img12 from "../assets/gallery/12.jpg";
import img13 from "../assets/gallery/13.jpg";
import img14 from "../assets/gallery/14.jpg";

export default function Gallery() {
  const allImages = [
    img1, img2, img3, img4, img5, img6, img7,
    img8, img9, img10, img11, img12, img13, img14
  ];

  const [visibleCount, setVisibleCount] = useState(6); // initially show 6 images

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, allImages.length));
  };

  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">Our Work</h2>

      <div className="container mx-auto grid md:grid-cols-3 gap-6">
        {allImages.slice(0, visibleCount).map((img, i) => (
          <motion.div
            key={i}
            className="overflow-hidden rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <img
              src={img}
              alt={`Gallery ${i + 1}`}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        ))}
      </div>

      {visibleCount < allImages.length && (
        <div className="flex justify-center mt-8">
          <motion.button
            onClick={loadMore}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition"
          >
            Load More
          </motion.button>
        </div>
      )}
    </section>
  );
}
