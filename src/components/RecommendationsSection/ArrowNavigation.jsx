import { ChevronLeft, ChevronRight } from "lucide-react";

const ArrowNavigation = ({ onPrev, onNext }) => {
  return (
    <div className="flex justify-center gap-4 mt-6">
      <button
        onClick={onPrev}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-500 hover:text-white transition"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={onNext}
        className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-blue-500 hover:text-white transition"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};
export default ArrowNavigation;
