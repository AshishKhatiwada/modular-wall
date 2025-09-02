import { motion } from "framer-motion";
import { User, Mail, MessageCircle, Phone, MapPin } from "lucide-react";
import contactImage from "../assets/slimwall.jpg"; // Replace with your image

export default function Contact() {
  return (
    <section className="py-20 bg-white-to-br from-green-50 via-green-100 to-green-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Get in <span className="text-green-600">Touch</span>
        </motion.h2>

        <div className="flex flex-col md:flex-row items-stretch gap-10">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 bg-white rounded-3xl p-10 shadow-2xl flex flex-col justify-between"
          >
            <div>
              <p className="text-gray-700 mb-6">
                Have questions or need a quote? Fill out the form or contact us directly.
              </p>

              <form className="grid gap-5">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full border p-4 pl-12 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition"
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full border p-4 pl-12 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition"
                  />
                </div>

                <div className="relative">
                  <MessageCircle className="absolute left-3 top-3 text-gray-400" />
                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    className="w-full border p-4 pl-12 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all"
                >
                  Send Message
                </motion.button>
              </form>
            </div>

            {/* Quick Contact Info */}
            <div className="mt-8 text-gray-700 space-y-3">
              <p className="flex items-center gap-2">
                <Phone size={20} className="text-green-600"/> +61 400 123 456
              </p>
              <p className="flex items-center gap-2">
                <Mail size={20} className="text-green-600"/> info@perthfencingspecialists.au
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={20} className="text-green-600"/> Perth, WA
              </p>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 overflow-hidden shadow-2xl flex items-stretch"
          >
            <img
              src={contactImage}
              alt="Contact"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
