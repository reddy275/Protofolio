const ExperienceItem = ({ role, company, duration, description }) => {
  return (
    <div className="border-l-2 border-blue-600 pl-4 pb-6">
      <p className="text-sm text-blue-600 dark:text-blue-400">{duration}</p>
      <h4 className="text-lg font-bold">{role}</h4>
      <p className="text-gray-500 dark:text-gray-400 text-sm">{company}</p>
      <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{description}</p>
    </div>
  );
};
export default ExperienceItem;
