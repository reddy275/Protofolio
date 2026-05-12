const CompanyLogo = ({ company }) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-md">
      <p className="text-sm font-medium text-gray-600 dark:text-gray-300">{company}</p>
    </div>
  );
};
export default CompanyLogo;
