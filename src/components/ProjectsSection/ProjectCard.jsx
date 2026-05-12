const ProjectCard = ({ title, description, tech, image, link }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 space-y-2">
        <h4 className="text-xl font-bold">{title}</h4>
        <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span key={t} className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-2 py-1 rounded">{t}</span>
          ))}
        </div>
        <a href={link} className="inline-block mt-2 text-blue-600 hover:underline text-sm">View Project →</a>
      </div>
    </div>
  );
};
export default ProjectCard;
