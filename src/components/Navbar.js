import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Import GitHub and LinkedIn icons

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Replace "My Portfolio" with GitHub and LinkedIn icons */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/BMacCodex" // Replace with your GitHub profile URL
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/brian-mcloughlin-85380673/" // Replace with your LinkedIn profile URL
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="space-x-4">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/projects" className="hover:underline">
            Projects
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
          <Link href="/case-studies" className="hover:underline">
            Case Studies
          </Link>
        </div>
      </div>
    </nav>
  );
}
