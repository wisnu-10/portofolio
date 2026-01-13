import { FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Fullstack",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "A comprehensive e-commerce solution with cart, checkout, and admin dashboard.",
    },
    {
      title: "Task Management App",
      category: "Productivity",
      image:
        "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Collaborative task manager with real-time updates and team features.",
    },
    {
      title: "Health & Fitness Tracker",
      category: "Mobile App",
      image:
        "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Mobile-first application to track workouts, nutrition, and health metrics.",
    },
    {
      title: "Finance Dashboard",
      category: "Data Visualization",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description:
        "Interactive dashboard for visualizing financial data and market trends.",
    },
  ];

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-black">
      <div className="container mx-auto">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 animate-fade-in-up">
            My <span className="text-blue-500">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg animate-fade-in-up delay-100">
            A selection of projects that demonstrate my expertise and passion
            for building quality software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-surface border border-gray-800"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-blue-500 text-sm font-medium mb-2">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {project.description}
                </p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors gap-2"
                >
                  View Project <FaExternalLinkAlt className="text-sm" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="btn btn-outline inline-flex items-center gap-2"
          >
            View All Projects <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
