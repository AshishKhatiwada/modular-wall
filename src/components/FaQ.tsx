import { useState } from "react";
import faqImage from "../assets/faq-image.jpg"; // Replace with your actual image

type FAQ = {
  question: string;
  answer: string;
};

export default function About() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: "Will the fence match the style of my home?",
      answer:
        "Definitely. We tailor the design and installation to suit your home’s aesthetic, whether you want a modern, natural, or traditional look."
    },
    {
      question: "Why should I choose Perth Fencing Specialists?",
      answer:
        "We’re local, experienced, and fully committed to quality workmanship and honest service. From design to finish, we make the whole process simple and stress-free."
    },
    {
      question: "Are your retaining walls engineered for strength?",
      answer:
        "They sure are! For walls above a certain height or load, we work with qualified engineers to ensure long-term stability and compliance with regulations."
    },
    {
      question: "What materials do you recommend for fencing in Perth?",
      answer:
        "Colorbond fencing and Modular Walls are extremely popular due to their durability and resistance to the local climate. However, we will recommend the best option for your site and budget."
    },
    {
      question: "How long does it take to build a fence?",
      answer:
        "Most residential fencing projects take between 2–5 days, depending on size and complexity. We’ll give you a clear timeline before we begin."
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="container mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>

      <div className="flex flex-col md:flex-row items-start gap-12">
        {/* Left Image */}
        <div className="md:w-1/2">
          <img
            src={faqImage}
            alt="FAQ Illustration"
            className="w-full h-full object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Right FAQ */}
        <div className="md:w-1/2 space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center font-semibold text-gray-800 bg-gray-100 hover:bg-gray-200 transition"
              >
                {faq.question}
                <span className="text-green-600 text-xl">
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-700 text-sm bg-white">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
