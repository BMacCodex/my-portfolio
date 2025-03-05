"use client";
import { useState, useEffect } from "react";

const Home = () => {
  const text = "I'm Brian Mcloughlin, welcome to my portfolio.";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 100); // Adjust speed here (lower = faster)

      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <div
      className="h-screen flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/background.jpg')" }}
    >
      <h1 className="text-4xl md:text-6xl font-bold text-black text-center">
        {displayText}
      </h1>
    </div>
  );
};

export default Home;
