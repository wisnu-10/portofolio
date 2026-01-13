import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaGithub,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiExpress,
  SiPrisma,
} from "react-icons/si";

const Skill = () => {
  const skills = [
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express", icon: <SiExpress className="text-white" /> },
    { name: "Prisma", icon: <SiPrisma className="text-white" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-300" /> },
    { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
    { name: "Github", icon: <FaGithub className="text-white" /> },
  ];

  return (
    <section id="skills" className="py-20 lg:py-32 bg-black">
      <div className="container mx-auto">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 animate-fade-in-up">
            My <span className="text-blue-500">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg animate-fade-in-up delay-100">
            Here are some of the technologies and tools I work with to bring
            specialized solutions to life.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-surface p-8 rounded-xl border border-gray-800 hover:border-blue-500 transition-all duration-300 group hover:-translate-y-1 flex flex-col items-center justify-center gap-4"
            >
              <div className="p-4 bg-gray-900 rounded-full group-hover:bg-gray-800 transition-colors text-4xl sm:text-5xl">
                {skill.icon}
              </div>
              <h3 className="text-lg font-bold group-hover:text-blue-500 transition-colors text-center">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
