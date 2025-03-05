import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Me</h1>

      {/* Social Links */}
      <div className="flex space-x-6 mb-8">
        <a
          href="https://github.com/your-github-username"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-black transition duration-300 text-3xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/your-linkedin-username"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 transition duration-300 text-3xl"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
        <form
          action="https://formspree.io/f/YOUR_FORM_ID" // Replace with your Formspree endpoint
          method="POST"
          className="flex flex-col space-y-4"
        >
          <label className="text-gray-700">
            Name:
            <input
              type="text"
              name="name"
              required
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
            />
          </label>

          <label className="text-gray-700">
            Email:
            <input
              type="email"
              name="email"
              required
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
            />
          </label>

          <label className="text-gray-700">
            Message:
            <textarea
              name="message"
              required
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
              rows="4"
            ></textarea>
          </label>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
};

export default Contact;
