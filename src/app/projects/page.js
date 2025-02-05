import ProjectCard from "../../components/ProjectCard";

export default function Projects() {
  return (
    <main className="max-w-4xl mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-6">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Arsenal Player Stats App */}
        <ProjectCard
          title="Arsenal Player Statistics"
          description="A React app that tracks Arsenal players' statistics using API-Football."
          imageUrl="/arsenal-stats.png" // Save this image in 'public/' folder
          liveLink="https://your-live-app-url.com" // Replace with your actual deployed app link
          repoLink="https://github.com/yourusername/arsenal-stats-app" // Replace with your GitHub repo link
        />
      </div>
    </main>
  );
}
