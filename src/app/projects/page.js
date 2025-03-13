function Projects() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>

      {/* Arsenal Player Statistics Project */}
      <div className="border p-4 rounded-lg shadow-lg mb-6 transition-transform transform hover:scale-105">
        <h2 className="text-xl font-semibold">Arsenal Player Statistics</h2>
        <p className="text-gray-600">
          A web app that tracks Arsenal FC's player stats for the 24/25 season.
        </p>
        <div className="mt-4">
          <a
            href="https://arsenal-website-theta.vercel.app"
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

      {/* Amazon Clone Project */}
      <div className="border p-4 rounded-lg shadow-lg mb-6 transition-transform transform hover:scale-105">
        <h2 className="text-xl font-semibold">Amazon Clone</h2>
        <p className="text-gray-600">
          A full-stack Amazon clone built with React, Next.js, Stripe Checkout,
          Webhooks, Firestore, and Redux.
        </p>
        <div className="mt-4">
          <a
            href="https://amazon-clone-olive-pi.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
          >
            Live Demo
          </a>
          <a
            href="https://github.com/BMacCodex/amazon-clone"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900"
          >
            GitHub Repo
          </a>
        </div>
      </div>

      {/* Netflix Clone Project */}
      <div className="border p-4 rounded-lg shadow-lg mb-6 transition-transform transform hover:scale-105">
        <h2 className="text-xl font-semibold">Netflix Clone</h2>
        <p className="text-gray-600">
          A Netflix-inspired streaming platform built with React, Firebase,
          Stripe, and Redux.
        </p>
        <div className="mt-4">
          <a
            href="https://netflix-clone-iota-olive.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Live Demo
          </a>
          <a
            href="https://github.com/BMacCodex/netflix-clone"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900"
          >
            GitHub Repo
          </a>
        </div>
      </div>

      {/* Restaurant Phone App Skeleton */}
      <div className="border p-4 rounded-lg shadow-lg mb-6 transition-transform transform hover:scale-105">
        <h2 className="text-xl font-semibold">Restaurant Phone App Skeleton</h2>
        <p className="text-gray-600">
          A mobile-friendly app prototype for restaurant order management.
        </p>
        <div className="mt-4">
          <a
            href="https://restaurant-loyalty-app.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            Live Demo
          </a>
          <a
            href="https://github.com/BMacCodex/restaurant-loyalty-app"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900"
          >
            GitHub Repo
          </a>
        </div>
      </div>

      {/* Practising Basic Components */}
      <div className="border p-4 rounded-lg shadow-lg mb-6 transition-transform transform hover:scale-105">
        <h2 className="text-xl font-semibold">Practising Basic Components</h2>
        <p className="text-gray-600">
          A small project where I build a table, a modal, custom buttons, an
          accordion, and a dropdown menu.
        </p>
        <div className="mt-4">
          <a
            href="https://comps-phi-eight.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600"
          >
            Live Demo
          </a>
          <a
            href="https://github.com/BMacCodex/comps"
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

export default Projects;
