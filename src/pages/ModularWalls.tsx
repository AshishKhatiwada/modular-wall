import { motion } from "framer-motion";
import slimWallImg from "../assets/slimwall.jpg";
import trendWallImg from "../assets/trendwall.jpg";
import vogueWallImg from "../assets/voguewall.jpg";
import estateWallImg from "../assets/estatewall.jpg";
import enduroMaxImg from "../assets/enduromax.jpg";

export default function ModularWalls() {
  const systems = [
    {
      title: "SlimWall®",
      description:
        "SlimWall® is our premium modular fencing solution that combines quality and value. With its sleek, modern design, acoustic properties and ability to integrate retaining, lighting, infills and slats, SlimWall is the fencing revolution that Australian homeowners didn’t even know they were waiting for.",
      features: ["Boundary Walls", "Pool Walls", "Acoustic Fences", "Premium Fences", "Dividing Walls & Fences"],
      specs: ["Up to 2100mm high*", "50mm thick panel", "Rated for all wind regions in Australia (*Additional strengthening sleeves required for heights above 2.1m)", "Retain up to 500mm with integrated panel (2.5kPa surcharge live loads)"],
      installation: ["Dig post holes", "Concrete posts into ground", "Slide in panels", "Choose your perfect finish"],
      img: slimWallImg,
    },
    {
      title: "TrendWall®",
      description:
        "TrendWall® is our sleek, high-performance modular wall for homeowners who want more. With aluminium posts, it is an ideal choice for both coastal areas and poolside locations. Offering greater heights for added privacy, higher acoustic properties and stronger retaining for challenging sites, TrendWall is a modern and stylish option.",
      features: ["Coastal-friendly walls", "Lightweight design", "Poolside privacy walls"],
      specs: ["Up to 2400mm high", "75mm thick panel", "Rated for all wind regions in Australia (*Additional strengthening sleeves required for heights above 2.1m)", "Retain up to 750mm with our integrated panel (2.5kPa surcharge live loads)"],
      installation: ["Dig post holes", "Concrete posts into ground", "Slide in panels", "Choose your perfect finish"],
      img: trendWallImg,
    },
    {
      title: "VogueWall®",
      description:
        "When looks are most important, VogueWall® offers a premium solution combining modern aesthetics in a versatile acoustic wall. Created to closely mirror the dimensions of a rendered masonry wall with piers, it also offers unmatched design potential and can accommodate a range of accessories including lighting, infills and slats.",
      features: ["Stylish masonry look", "Brick-style piers", "Customizable panels"],
      specs: ["Up to 3000mm high", "75mm thick panel", "Rated for all wind regions in Australia subject to height and terrain specifications. Contact us to learn more.","Integrate TerraFirm retaining panel to retain up to 750mm (2.5kPa surcharge live loads)"],
      installation: ["Dig post holes", "Concrete posts into ground", "Slide in panels", "Choose your perfect finish"],
      img: vogueWallImg,
    },
    {
      title: "EstateWall®",
      description:
        "EstateWall® is our robust masonry-alternative modular wall that leaves a lasting impression. Showcasing our largest posts, EstateWall is designed for those who are looking to create a grand front wall, security wall or premium boundary wall.",
      features: ["Premium front walls", "Grand estate entrances", "Secure and robust"],
      specs: ["Up to 3000mm high", "75mm thick panel", "Rated for all wind regions in Australia subject to height and terrain specifications. Contact us to learn more.", "Integrate TerraFirm retaining panel to retain up to 750mm (2.5kPa surcharge live loads)"],
      installation: ["Dig post holes", "Concrete posts into ground", "Slide in panels", "Choose your perfect finish"],
      img: estateWallImg,
    },
    {
      title: "EnduroMax®",
      description: "High impact solution for road, rail and civil infrastructure environments.",
      features: ["Heavy-duty applications", "Infrastructure fencing", "Long-lasting durability"],
      specs: ["Outer skin Cementitious / impact layer", "Panel core EPS", "Available lengths 2400mm, 3000mm or 4200mm", "Available heights 12000mm", "Panel Thickness 75mm to 150mm (wind region dependant)", "Soil retention on request"],
      installation: ["Dig post holes", "Concrete posts into ground", "Slide in panels", "Choose your perfect finish"],
      img: enduroMaxImg,
    },
  ];

  return (
    <section className="py-16 container mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold text-center mb-12"
      >
        ModularWalls® in Perth Fencing <span className="text-green-600">Stylish, Durable & Affordable</span>
      </motion.h2>

      <div className="space-y-16">
        {systems.map((sys, i) => (
          <div key={i}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className={`flex flex-col md:flex-row items-stretch gap-8 ${
                i % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="md:w-1/2 flex-shrink-0">
                <img
                  src={sys.img}
                  alt={sys.title}
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                />
              </div>

              {/* Description */}
              <div className="md:w-1/2 flex flex-col justify-between space-y-4">
                <h3 className="text-2xl font-bold">{sys.title}</h3>
                <p className="text-gray-700 text-lg">{sys.description}</p>

                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {sys.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>

                <div className="bg-gray-100 p-4 rounded-lg shadow-inner text-gray-700 space-y-1">
                  {sys.specs.map((spec, idx) => (
                    <p key={idx}>{spec}</p>
                  ))}
                </div>

                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600 text-gray-700 space-y-2">
                  <h4 className="font-semibold text-lg">Installation Details</h4>
                  <ol className="list-decimal list-inside space-y-1">
                    {sys.installation.map((step, idx) => (
                      <li key={idx}>{step}</li>
                    ))}
                  </ol>
                  <p className="text-sm mt-2">
                    Choose between DIY or Professional installation – contact us for more information.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Stylish Divider */}
            {i < systems.length - 1 && (
              <div className="my-12 flex justify-center">
                <div className="w-24 h-1 bg-gradient-to-r from-green-600 via-green-400 to-green-600 rounded-full"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
