function Projects() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>

      {/* Amazon Clone Project */}
      <div className="border p-4 rounded-lg shadow-lg mb-6 transition-transform transform hover:scale-105">
        <h2 className="text-xl font-semibold">Amazon Clone</h2>
        <p className="text-gray-600">
          A frontend Amazon clone built with React, Next.js and Redux and with
          google sign in and sign out functionality.
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

      {/* Netflix Clone Project */}
      <div className="border p-4 rounded-lg shadow-lg mb-6 transition-transform transform hover:scale-105">
        <h2 className="text-xl font-semibold">Netflix Clone</h2>
        <p className="text-gray-600">
          A Netflix-inspired streaming platform built with React, Firebase and
          Redux.
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

      {/* Guess My Number Game */}
      <div className="border p-4 rounded-lg shadow-lg mb-6 transition-transform transform hover:scale-105">
        <h3 className="text-xl font-semibold mb-2">Guess My Number Game</h3>
        <p className="text-gray-700 mb-4">
          A simple number guessing game built with JavaScript.
        </p>
        <div className="flex space-x-4">
          <a
            href="https://guess-my-number-phi-one.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300"
          >
            Live Demo
          </a>
          <a
            href="https://github.com/BMacCodex/guess-my-number"
            target="_blank"
            rel="noopener noreferrer"
            className="border bg-gray-800 text-white px-4 py-2 rounded-md  hover:bg-gray-900 hover:text-white transition duration-300"
          >
            GitHub Repo
          </a>
        </div>
      </div>

      {/* Car Management App */}

      <div className="border p-4 rounded-lg shadow-lg mb-6 transition-transform transform hover:scale-105">
        <h3 className="text-xl font-semibold mb-2">Car Management App</h3>
        <p className="text-gray-700 mb-4">
          A dynamic React.js application with Redux for state management,
          allowing users to add, delete, and search for cars while tracking the
          total cost in real-time.
        </p>
        <div className="flex space-x-4">
          <a
            href="https://cars-psi-three.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-700 transition duration-300"
          >
            Live Demo
          </a>
          <a
            href="https://github.com/BMacCodex/cars"
            target="_blank"
            rel="noopener noreferrer"
            className="border bg-gray-800 text-white px-4 py-2 rounded-md  hover:bg-gray-900 hover:text-white transition duration-300"
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
