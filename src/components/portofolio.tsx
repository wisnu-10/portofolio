import { FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";

const Portfolio = () => {
  const projects = [
    {
      title: "Event Management Apps",
      category: "Fullstack",
      image:
        "https://res.cloudinary.com/dijijub10/image/upload/v1777438829/Screenshot_2026-04-29_120003_rffnpf.png",
      description:
        "Event Management Apps that helps to manage events and its activities.",
      github: {
        frontend: "https://github.com/wisnu-10/frontend-miniproject",
        backend: "https://github.com/wisnu-10/backend-miniproject",
      },
    },
    {
      title: "JAPKO Company Profile",
      category: "Company Profile",
      image:
        "https://res.cloudinary.com/dijijub10/image/upload/v1777439558/Screenshot_2026-04-29_121204_qc6odi.png",
      description: "Company Profile Website for JAPKO.",
      link: "https://japko-pangan-indonesia.vercel.app/",
    },
    {
      title: "diLaundryin",
      category: "Fullstack",
      image:
        "https://res.cloudinary.com/dijijub10/image/upload/v1777440051/Screenshot_2026-04-29_121805_rie2di.png",
      description:
        "An advanced laundry management system featuring order tracking, outlet management, and real-time status updates.",
      github: {
        frontend: "https://github.com/wisnu-10/final-project-frontend",
        backend: "https://github.com/wisnu-10/final-project-backend",
      },
    },
  ];

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-black relative">
      <div className="container mx-auto">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 animate-fade-in-up">
            My <span className="text-blue-500 font-extrabold">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg animate-fade-in-up delay-100">
            A curated selection of projects that showcase my technical skills
            and problem-solving approach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative flex flex-col h-full rounded-2xl overflow-hidden bg-surface/50 border border-white/5 backdrop-blur-sm transition-all duration-500 hover:border-blue-500/50 hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)]"
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-surface to-transparent opacity-60"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-semibold bg-blue-500/90 text-white rounded-full backdrop-blur-md">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="flex flex-col grow p-6 lg:p-8">
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm lg:text-base leading-relaxed mb-6 grow">
                  {project.description}
                </p>

                <div className="mt-auto space-y-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-white bg-white/5 hover:bg-blue-500 px-4 py-2 rounded-lg transition-all duration-300 w-full justify-center gap-2 group/link"
                    >
                      Live Demo{" "}
                      <FaExternalLinkAlt className="text-xs transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  )}

                  {project.github && (
                    <div className="grid grid-cols-2 gap-3">
                      <a
                        href={project.github.frontend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs font-medium text-gray-400 hover:text-white border border-white/10 hover:border-blue-500/50 px-3 py-2 rounded-lg transition-all duration-300 justify-center gap-2"
                      >
                        Frontend <FaExternalLinkAlt className="text-[10px]" />
                      </a>
                      <a
                        href={project.github.backend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs font-medium text-gray-400 hover:text-white border border-white/10 hover:border-blue-500/50 px-3 py-2 rounded-lg transition-all duration-300 justify-center gap-2"
                      >
                        Backend <FaExternalLinkAlt className="text-[10px]" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://github.com/wisnu-10"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline inline-flex items-center gap-3 px-8 group"
          >
            Explore More on GitHub{" "}
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
