import { useState } from "react";
import { motion } from "framer-motion";

// 1. Define a type for the estimate
interface Estimate {
  wallType: string;
  length: string; // you can change to number if you parse input
  height: string; // same here
  total: string;  // total is a string because you used toFixed(2)
}

export default function QuoteCalculator() {
  const [wallType, setWallType] = useState("");
  const [length, setLength] = useState("");
  const [height, setHeight] = useState("");

  // 2. Type the estimate state
  const [estimate, setEstimate] = useState<Estimate | null>(null);

  // Pricing per square meter (AUD)
  const pricing = {
    "SlimWall®": 450,
    "TrendWall®": 550,
    "VogueWall®": 600,
    "EstateWall®": 700,
    "EnduroMax®": 800,
  };

  const handleQuote = (e: React.FormEvent) => {
    e.preventDefault();

    if (!wallType || !length || !height) {
      alert("Please fill all fields.");
      return;
    }

    if (!(wallType in pricing)) {
      alert("Please select a valid wall type.");
      return;
    }

    const rate = pricing[wallType as keyof typeof pricing];
    const area = parseFloat(length) * parseFloat(height);
    const total = area * rate;

    setEstimate({
      wallType,
      length,
      height,
      total: total.toFixed(2),
    });
  };

  return (
    <section className="py-16 bg-gray-50 text-center px-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold mb-8 text-green-700"
      >
        Get Your <span className="text-gray-800">Instant Quote</span>
      </motion.h2>

      <form
        onSubmit={handleQuote}
        className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg space-y-4"
      >
        {/* Wall Type */}
        <div>
          <label className="block mb-1 font-medium">Select Wall Type</label>
          <select
            value={wallType}
            onChange={(e) => setWallType(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2"
            required
          >
            <option value="">-- Choose --</option>
            {Object.keys(pricing).map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Length & Height */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Length (m)</label>
            <input
              type="number"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2"
              min="0"
              step="0.1"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Height (m)</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2"
              min="0"
              step="0.1"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white font-semibold py-2 rounded-lg hover:bg-green-700 transition"
        >
          Generate Quote
        </button>
      </form>

      {estimate && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-8 bg-green-100 p-6 rounded-xl max-w-md mx-auto shadow-md"
        >
          <h3 className="text-2xl font-bold text-green-800 mb-2">
            Estimated Quote
          </h3>
          <p>
            <strong>Wall Type:</strong> {estimate.wallType}
          </p>
          <p>
            <strong>Length:</strong> {estimate.length} m
          </p>
          <p>
            <strong>Height:</strong> {estimate.height} m
          </p>
          <p className="text-xl mt-3 font-semibold">
            💰 Estimated Cost: ${estimate.total} AUD
          </p>
          <p className="text-sm mt-2 text-gray-600">
            (This estimate excludes installation and site prep. Contact us for
            an exact quote.)
          </p>
        </motion.div>
      )}
    </section>
  );
}
