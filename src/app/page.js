"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Home = () => {
  const text = "Hello, I'm Brian Mcloughlin, welcome to my portfolio.";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 60);
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <main>
      {/* Hero Section */}
      <div className="h-screen flex flex-col md:flex-row justify-center items-center bg-cover bg-center px-4">
        {/* Text */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-bold text-black">
            {displayText}
          </h1>
        </div>

        {/* Image */}
        <div className="md:w-1/3 flex justify-center">
          <Image
            src="/LindaIlunga284663.jpg"
            alt="Brian Mcloughlin"
            width={300}
            height={400}
            className="rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>

      {/* About Section */}
      <motion.div
        className="max-w-3xl mx-auto px-6 py-16 text-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="bg-slate-50 p-10 rounded-2xl shadow-xl max-w-4xl mx-auto my-12 text-lg leading-relaxed text-slate-800">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">About Me</h2>
          <p>
            👋 <strong>Hi, I'm Brian</strong> — a former music industry
            professional turned product coordinator.
          </p>
          <p className="mt-4">
            After years of managing artists, clients, and creative projects,
            I’ve transitioned into product operations where I bring{" "}
            <strong>structure, clarity, and momentum</strong> to every
            initiative.
          </p>
          <p className="mt-4">
            I'm passionate about bridging teams, clarifying priorities, and
            keeping timelines moving — whether it's a software product or a
            studio release.
          </p>
          <p className="mt-4">
            With hands-on experience using tools like Trello, Notion, and
            Airtable, and formal training in React.js and JavaScript, I now
            focus on helping cross-functional teams stay aligned and deliver
            meaningful results.
          </p>
          <p className="mt-6 italic">
            I believe great coordination is about empathy, clarity, and
            curiosity — and I bring all three to every project I touch.
          </p>
        </div>
      </motion.div>
    </main>
  );
};

export default Home;
