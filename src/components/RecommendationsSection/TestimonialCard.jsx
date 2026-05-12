const TestimonialCard = ({ name, role, text, avatar }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-md mx-auto">
      <p className="text-gray-600 dark:text-gray-300 italic mb-4">"{text}"</p>
      <div className="flex items-center gap-3">
        <img src={avatar} alt={name} className="w-10 h-10 rounded-full" />
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
        </div>
      </div>
    </div>
  );
};
export default TestimonialCard;
