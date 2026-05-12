import { useState } from "react";
import TestimonialCard from "./TestimonialCard";
import ArrowNavigation from "./ArrowNavigation";
import CompanyLogo from "./CompanyLogo";
import { recommendations } from "../../data/portfolio";

const RecommendationsSection = () => {
  const [current, setCurrent] = useState(0);

  const onPrev = () => {
    setCurrent((prev) => (prev === 0 ? recommendations.length - 1 : prev - 1));
  };

  const onNext = () => {
    setCurrent((prev) => (prev === recommendations.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="min-h-screen pt-24 px-6 md:px-12 lg:px-24">
      <h2 className="text-lg text-blue-600 dark:text-blue-400">What Others Say</h2>
      <h3 className="text-3xl font-bold mb-8">Recommendations</h3>

      <TestimonialCard {...recommendations[current]} />
      <ArrowNavigation onPrev={onPrev} onNext={onNext} />

      {/* Company Logos */}
      <div className="flex flex-wrap justify-center gap-4 mt-10">
        {recommendations.map((rec) => (
          <CompanyLogo key={rec.company} company={rec.company} />
        ))}
      </div>
    </section>
  );
};
export default RecommendationsSection;
