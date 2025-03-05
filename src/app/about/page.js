import React from "react";

const About = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">About Me</h1>

      <div className="max-w-3xl bg-white p-6 rounded-lg shadow-lg">
        {/* Introduction */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            👋 Hi, I'm Brian Mcloughlin
          </h2>
          <p className="text-gray-700 leading-relaxed">
            I'm a **frontend developer** skilled in **JavaScript & React**. I
            transitioned into tech in **January 2024** after a career in the
            music industry as a **sound engineer and music producer**. My
            passion for problem-solving and creativity led me to coding, and
            I've been hooked ever since.
          </p>
        </section>

        {/* Career Change Journey */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">🔄 My Career Change</h2>
          <p className="text-gray-700 leading-relaxed">
            While working in music, I realized I wanted a career that was both
            **creative and intellectually stimulating**. I had always been
            fascinated by **technology and computers**—from modding games as a
            teenager to troubleshooting software for music production.
          </p>
          <p className="text-gray-700 leading-relaxed mt-2">
            After reflecting on my future, I decided to **fully commit to
            coding**. I started learning in **January 2024**, and since then,
            I’ve dedicated myself to mastering **frontend development**.
          </p>
        </section>

        {/* Learning & Certifications */}
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">
            📚 Continuous Learning
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              🏆 **Responsive Web Design** & **JavaScript Algorithms**
              certifications (freeCodeCamp)
            </li>
            <li>
              📜 **Web Development using React & JSX** (University of Toronto)
            </li>
            <li>🎓 **Modern React with Redux** by Stephen Grider (Udemy)</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-2">
            I also regularly **attend meetups and workshops** to stay updated
            with industry trends and connect with other developers.
          </p>
        </section>

        {/* Tech Stack */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">🛠 Tech Stack</h2>
          <p className="text-gray-700 leading-relaxed">
            My current expertise includes **HTML, CSS, JavaScript, React, Redux,
            Next.js, and Tailwind CSS**. I am constantly exploring **new
            technologies** to improve my skills.
          </p>
        </section>
      </div>
    </main>
  );
};

export default About;
