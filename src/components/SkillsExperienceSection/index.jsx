import SkillCard from "./SkillCard";
import ExperienceItem from "./ExperienceItem";
import { skills, experiences } from "../../data/portfolio";

const SkillsExperienceSection = () => {
  return (
    <section className="min-h-screen pt-24 px-6 md:px-12 lg:px-24">
      <h2 className="text-lg text-blue-600 dark:text-blue-400">What I Know</h2>
      <h3 className="text-3xl font-bold mb-8">Skills & Experience</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Skills */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Skills</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((skill) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Experience</h4>
          <div>
            {experiences.map((exp) => (
              <ExperienceItem key={exp.role} {...exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default SkillsExperienceSection;
