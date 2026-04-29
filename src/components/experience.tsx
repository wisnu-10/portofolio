import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      company: "Purwadhika Digital School",
      role: "Student of Fullstack Web Development Program",
      period: "2025 - 2026",
      description: "Intensive bootcamp focusing fullstack web development",
    },
    {
      company: "Ara Physio",
      role: "Physiotherapist",
      period: "2021 - 2025",
      description:
        "Leading a team of therapist in building scalable physiotherapy services for clients.",
    },
    {
      company: "Profession of Physiotherapy",
      role: "Professional of Physiotherapy",
      period: "2021 - 2022",
      description:
        "Provided expert physiotherapy services to clients, specializing in all type of rehabilitation and injury prevention.",
    },
    {
      company: "Universitas Esa Unggul",
      role: "Bachelor of Physiotherapy",
      period: "2016 - 2020",
      description:
        "Undergraduate physiotherapy program. Developed foundational knowledge in human anatomy, physiology, and evidence-based rehabilitation techniques.",
    },
  ];

  return (
    <section id="experience" className="py-20 lg:py-32 bg-surface">
      <div className="container mx-auto">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 animate-fade-in-up">
            Professional <span className="text-blue-500">Journey</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg animate-fade-in-up delay-100">
            These are the experiences that have shaped me into the developer I
            am today.
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
