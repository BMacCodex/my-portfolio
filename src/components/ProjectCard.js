import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({
  title,
  description,
  imageUrl,
  liveLink,
  repoLink,
}) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
      <Image
        src={imageUrl}
        alt={title}
        width={400}
        height={250}
        className="w-full h-52 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
        <div className="mt-4 flex space-x-4">
          <Link
            href={liveLink}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Live Demo
          </Link>
          <Link
            href={repoLink}
            className="bg-gray-600 text-white px-4 py-2 rounded"
          >
            GitHub Repo
          </Link>
        </div>
      </div>
    </div>
  );
}
