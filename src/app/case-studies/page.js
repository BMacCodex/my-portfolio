// app/case-studies/page.js

import Link from "next/link";

export default function CaseStudiesPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Case Studies</h1>
      <p className="text-gray-700 mb-6">
        Dive deeper into how I built some of my projects—focusing on problems,
        solutions, and takeaways.
      </p>

      {/* Example Case Study Preview */}
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">
          Product Coordination Case Study: CleanTone VST Plugin
        </h2>
        <p className="text-gray-700 mb-4">
          I created this Trello board to simulate the coordination of a new
          audio plugin product (CleanTone VST). It showcases how I manage
          stakeholders, timelines, responsibilities, and cross-team
          communication using modern tools like Trello, checklists, labels, and
          documentation.
        </p>
        <Link
          href="/case-studies/trello"
          className="text-blue-500 hover:underline"
        >
          Read Full Case Study →
        </Link>
      </div>
    </main>
  );
}
