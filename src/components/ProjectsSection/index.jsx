
import { projects } from "../../data/portfolio";
import ProjectCard from "./ProjectCard";
const ProjectsSection = () => {
  return (
    <section className="min-h-screen pt-24 px-6 md:px-12 lg:px-24">
      <h2 className="text-lg text-blue-600 dark:text-blue-400">
        My Work
      </h2>
      <h3 className="text-3xl font-bold mb-8">Featured Projects

      </h3>
      {/*Project  Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  )
};
export default ProjectsSection;
