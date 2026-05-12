const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8 px-6 md:px-12 lg:px-24 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          © 2025 V.Reddysekhar. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href="#" className="text-gray-500 hover:text-blue-600 transition text-sm">GitHub</a>
          <a href="#" className="text-gray-500 hover:text-blue-600 transition text-sm">LinkedIn</a>
          <a href="#" className="text-gray-500 hover:text-blue-600 transition text-sm">Twitter</a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
