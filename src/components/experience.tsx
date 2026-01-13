import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      company: "High Tech Corp.",
      role: "Senior Fullstack Developer",
      period: "2023 - Present",
      description:
        "Leading a team of developers in building scalable web applications for enterprise clients.",
    },
    {
      company: "Digital Innovations",
      role: "Frontend Developer",
      period: "2021 - 2023",
      description:
        "Developed responsive and interactive code for client websites. Collaborated with designers to ensure pixel-perfect implementation of UI/UX designs.",
    },
    {
      company: "Clean Code Studio",
      role: "Junior Developer",
      period: "2019 - 2021",
      description:
        "Assisted in the development of internal tools and maintained legacy codebases. Gained hands-on experience with modern web technologies.",
    },
  ];

  return (
    <section id="experience" className="py-20 lg:py-32 bg-surface">
      <div className="container mx-auto">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 animate-fade-in-up">
            Work <span className="text-blue-500">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg animate-fade-in-up delay-100">
            My professional journey and the companies I've had the privilege to
            work with.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l border-gray-800 ml-4 space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8">
                <div className="absolute -left-[11px] top-0 w-6 h-6 rounded-full bg-blue-500 border-4 border-black flex items-center justify-center">
                  <FaBriefcase className="text-white text-[10px]" />
                </div>

                <div className="bg-black p-6 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-colors">
                  <span className="text-sm text-blue-500 font-mono mb-2 block">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {exp.role}
                  </h3>
                  <h4 className="text-gray-400 text-lg mb-4">{exp.company}</h4>
                  <p className="text-gray-500 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
