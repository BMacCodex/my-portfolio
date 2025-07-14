"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, duration: 0.5 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold text-center mb-8"
      >
        About Me
      </motion.h1>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-3xl bg-white p-6 rounded-lg shadow-lg space-y-8"
      >
        {/* Introduction */}
        <motion.section variants={itemVariants}>
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Hi, I'm Brian Mcloughlin
          </h2>
          <div className="flex justify-center gap-6 mb-6 flex-wrap">
            <Image
              src="/LindaIlunga284740.jpg"
              alt="Brian Mcloughlin"
              width={300}
              height={400}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>

          <p className="text-gray-700 leading-relaxed">
            A product-focused problem solver with a background in
            communications, audio engineering, and frontend development. I
            transitioned into tech in early 2024 after years of managing
            creative projects and leading teams in the music industry.
          </p>
        </motion.section>

        {/* My Transition into Product */}
        <motion.section variants={itemVariants}>
          <h2 className="text-2xl font-semibold mb-4">
            My Transition into Product
          </h2>
          <p className="text-gray-700 leading-relaxed">
            My career began in music, where I managed complex productions,
            collaborated with diverse stakeholders, and delivered high-quality
            results under tight deadlines. This experience naturally evolved
            into product coordination, where I could combine creativity with
            structure and strategy.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            I started learning web development to better understand the tools
            behind the digital products I was helping shape. That hands-on
            technical knowledge now empowers me to communicate more effectively
            with engineering teams, scope product features realistically, and
            align execution with user and business goals.
          </p>
        </motion.section>

        {/* Strengths as a Product Coordinator */}
        <motion.section variants={itemVariants}>
          <h2 className="text-2xl font-semibold mb-4">
            Strengths as a Product Coordinator
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Cross-functional communication</strong> — Fluent in both
              technical and non-technical language, ensuring alignment across
              teams
            </li>
            <li>
              <strong>Workflow & sprint planning</strong> — Comfortable managing
              projects in tools like Trello, Jira, and Notion
            </li>
            <li>
              <strong>User-focused</strong> — Experienced in translating
              real-world user feedback into actionable improvements
            </li>
            <li>
              <strong>Stakeholder alignment</strong> — Skilled in documentation,
              role clarity, and navigating competing priorities
            </li>
            <li>
              <strong>Delivery mindset</strong> — Driven by clear outcomes,
              accountability, and iterating toward success
            </li>
          </ul>
        </motion.section>

        {/* Technical Fluency */}
        <motion.section variants={itemVariants}>
          <h2 className="text-2xl font-semibold mb-4">Technical Fluency</h2>
          <p className="text-gray-700 leading-relaxed">
            While I’m focused on product, my technical foundation includes HTML,
            CSS, JavaScript, React, Redux, and Next.js. This allows me to
            collaborate more effectively with developers, prototype ideas
            quickly, and understand the trade-offs behind technical decisions.
          </p>
        </motion.section>

        {/* Continuous Learning */}
        <motion.section variants={itemVariants}>
          <h2 className="text-2xl font-semibold mb-4">Continuous Learning</h2>
          <p className="text-gray-700 leading-relaxed">
            I hold certifications in Responsive Web Design and Web Development
            using React and JSX (University of Toronto School of Continuing
            Studies & Udemy). Currently, I'm finishing an online Google course
            in Product Management. I’m committed to staying current through
            ongoing learning, community meetups, and hands-on projects.
          </p>
        </motion.section>
      </motion.div>
    </main>
  );
};

export default About;
