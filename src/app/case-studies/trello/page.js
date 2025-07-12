import Link from "next/link";
import Image from "next/image";

export default function CarManagementCaseStudy() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <Link href="/case-studies" className="text-blue-500 hover:underline">
        ← Back to Case Studies
      </Link>

      <h1 className="text-4xl font-bold mt-6 mb-4">
        Case Study: Product Coordination for CleanTone VST Plugin (Trello
        Simulation)
      </h1>

      <p className="mb-4 text-gray-700">
        This case study showcases how I used Trello to simulate the coordination
        of a new digital audio product: the CleanTone VST plugin, a tool that
        removes background noise from recordings. I created a full project board
        to model how product, engineering, QA, marketing, and executives would
        collaborate across the product life cycle. The goal was to demonstrate
        my ability to organize, plan, and manage product operations using modern
        project coordination tools.
      </p>
      <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>

      <p>
        Product: CleanTone – A noise-reducing VST plugin for audio professionals
        My Role: Product Coordinator (simulation) Goal: Coordinate all teams
        from concept to release using Trello Deliverables: Trello board with
        stakeholder cards, timelines, responsibilities, and documentation PDF
        walkthrough of the entire setup Simulated workflow for stakeholder
        communication and product milestone tracking
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        Trello Board Overview
      </h2>

      <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
        <li>
          <span className="font-semibold">Department Labels:</span> To clearly
          distinguish team responsibilities
        </li>
        <li>
          <span className="font-semibold">Stakeholder Cards:</span> Including
          detailed checklists of responsibilities
        </li>
        <li>
          <span className="font-semibold">Milestones & Timelines:</span> Visual
          planning using converted checklist items
        </li>
        <li>
          <span className="font-semibold">Team Simulation:</span> Colour coding
          for each individual team member and mock assignments to mimic real
          collaboration
        </li>
      </ul>

      <div className="space-x-4">
        <a
          href="https://trello.com/b/JAwSueld"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          View the Trello Board
        </a>
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Skills Demonstrated</h2>

      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Task & timeline coordination using Kanban</li>
        <li>Cross-functional communication planning</li>
        <li>
          Use of Trello labels, due dates, checklists, and team simulation
        </li>
        <li>Stakeholder documentation and role clarity</li>
        <li>Product lifecycle thinking from ideation to QA and release</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        Screenshots & Highlights
      </h2>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Kanban Board Overview</h2>
        <Image
          src="/images/1-board-overview.png"
          alt="Kanban board screenshot"
          width={600}
          height={300}
          className="rounded-lg shadow-lg"
        />
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Stakeholder Card</h2>
        <Image
          src="/images/2-samir-card.png"
          alt="Kanban board screenshot"
          width={600}
          height={300}
          className="rounded-lg shadow-lg"
        />
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Timeline View</h2>
        <Image
          src="/images/3-timeline-list.png"
          alt="Kanban board screenshot"
          width={300}
          height={300}
          className="rounded-lg shadow-lg"
        />
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          Card with Label + Due Date
        </h2>
        <Image
          src="/images/4-due-date-label.png"
          alt="Kanban board screenshot"
          width={600}
          height={300}
          className="rounded-lg shadow-lg"
        />
      </div>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Refletion</h2>

      <p>
        This project helped me apply real-world project coordination skills to a
        simulated product launch. By mapping out roles, deliverables, and
        timelines, I was able to demonstrate how I approach organization,
        communication, and problem-solving — even without a live team. I'm
        excited to bring this same energy and structure to a product
        coordination/owner or customer success role.
      </p>
    </main>
  );
}
