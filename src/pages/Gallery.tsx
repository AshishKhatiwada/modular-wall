import { motion } from "framer-motion";
import { useState } from "react";

// Import hero image and gallery images
import heroImg from "../assets/gallery/10.jpg"; // 🖼️ Add your top banner image here
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
import img15 from "../assets/gallery/15.jpg";
import img16 from "../assets/gallery/16.jpg";

export default function Gallery() {
  const allImages = [
    img1, img2, img3, img4, img5, img6, img7,
    img8, img9, img10, img11, img12, img13, img14, img15, img16
  ];

  const [visibleCount, setVisibleCount] = useState(6);

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, allImages.length));
  };

  return (
    <>
      {/* 🌅 Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden brightness-125"
      >
        <img
          src={heroImg}
          alt="Gallery Hero"
          className="absolute top-0 left-0 w-full h-full object-cover brightness-125"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Our <span className="text-green-400">Work Gallery</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Explore our latest fencing and ModularWalls® projects across Perth — designed for strength, style, and security.
          </p>
        </div>
      </motion.section>

      {/* 📸 Gallery Section */}
      <section className="py-16 bg-gray-100">
       

        <div className="container mx-auto grid md:grid-cols-3 gap-6 px-4">
          {allImages.slice(0, visibleCount).map((img, i) => (
            <motion.div
              key={i}
              className="relative overflow-hidden rounded-xl shadow-lg group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <img
                src={img}
                alt={`Gallery ${i + 1}`}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center text-white text-lg font-semibold">
                Perth Fencing Project #{i + 1}
              </div>
            </motion.div>
          ))}
        </div>

        {visibleCount < allImages.length && (
          <div className="flex justify-center mt-10">
            <motion.button
              onClick={loadMore}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition font-semibold shadow-md"
            >
              Load More
            </motion.button>
          </div>
        )}
      </section>
    </>
  );
}
