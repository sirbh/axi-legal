"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const reviews = [
  {
    stars: "⭐⭐⭐⭐⭐",
    text: `"Professional Delhi business registration service! They handled my GST filing and company incorporation with absolute transparency. I was worried about the complex paperwork in NCR, but Axilegal made it feel incredibly simple and fast."`,
    author: "- Savita Dhaiya",
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    text: `"Excellent court representation in NCR. I had a difficult litigation case regarding a commercial lease, and the team provided strategic advice that saved me both time and money. Truly a trustworthy legal partner."`,
    author: "- Nitin Aggarwal",
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    text: `"Property dispute solved smoothly in Noida. I was struggling with an illegal possession issue for months. The legal notices drafted by Axilegal were airtight and forced the other party to negotiate."`,
    author: "- Prakash Pandey",
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    text: `"Best ₹499 consultation in Delhi. I spoke with a senior advisor about my tax audits and the level of detail they provided in just 30 minutes was amazing. They identified potential savings I hadn't considered."`,
    author: "- Irfan Ahmed",
  },
  {
    stars: "⭐⭐⭐⭐⭐",
    text: `"Great experience with GST filing. As a small business owner, I was constantly missing deadlines. Axilegal took over my monthly filings and now I never have to worry about penalties."`,
    author: "- Rahul Sharma",
  },
];

export default function ReviewsSlider() {
  const [index, setIndex] = useState(0);

  // auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 5000); // 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="reviews" className="py-16 sm:py-20 md:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h3 className="text-2xl sm:text-5xl font-extrabold text-[#0a1931] mb-6 relative text-center mb-12 text-4xl font-extrabold text-[var(--primary)]
           after:content-[''] after:block after:w-15 after:h-1 after:bg-[var(--accent)]
           after:mx-auto after:mt-4 after:rounded-sm">
          What Our Clients Say
        </h3>

        <div className="relative h-64">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 flex flex-col items-center justify-center px-4"
            >
              <div className="text-yellow-400 text-xl mb-4">{reviews[index].stars}</div>
              <p className="text-gray-700 text-center mb-4">{reviews[index].text}</p>
              <strong className="text-gray-900">{reviews[index].author}</strong>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}