export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>

      {/* Arsenal Player Statistics Project */}
      <div className="border p-4 rounded-lg shadow-lg mb-6">
        <h2 className="text-xl font-semibold">Arsenal Player Statistics</h2>
        <p className="text-gray-600">
          A web app that tracks Arsenal FC's player stats for the 24/25 season.
        </p>
        <div className="mt-4">
          <a
            href="https://arsenal-website-theta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Live Demo
          </a>
          <a
            href="https://github.com/BMacCodex/arsenal-website"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900"
          >
            GitHub Repo
          </a>
        </div>
      </div>

      {/* Netflix Clone Project */}
      <div className="border p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold">Netflix Clone</h2>
        <p className="text-gray-600">
          A Netflix-inspired streaming platform built with React, Firebase,
          Stripe, and Redux.
        </p>
        <div className="mt-4">
          <a
            href="https://YOUR_NETFLIX_CLONE_LIVE_DEMO_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Live Demo
          </a>
          <a
            href="https://github.com/YOUR_GITHUB_USERNAME/netflix-clone"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900"
          >
            GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
}
