const SkillCard = ({ name, level, icon }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl transition-all">
      <div className="flex items-center gap-3 mb-2">
        <img src={icon} alt={name} className="w-8 h-8 rounded" />
        <h4 className="font-semibold">{name}</h4>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className="bg-blue-600 h-2 rounded-full transition-all"
          style={{ width: `${level}%` }}
        />
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{level}%</p>
    </div>
  );
};
export default SkillCard;
