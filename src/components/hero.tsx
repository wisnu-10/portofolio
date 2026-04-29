import { FaArrowRight, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24 pb-12 lg:pt-32 relative overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h2 className="text-blue-500 font-medium tracking-wider text-sm lg:text-base animate-fade-in-up">
                HELLO, I'M
              </h2>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in-up delay-100">
                Wisnu <br />
                <span className="text-gray-300">Bintoro</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-400 font-light animate-fade-in-up delay-200">
                <span className="text-blue-500 font-semibold">
                  Fullstack Developer
                </span>
              </p>
              <p className="text-gray-500 text-base md:text-lg max-w-lg mx-auto lg:mx-0 animate-fade-in-up delay-300">
                Passionate about creating purposeful and innovative digital
                solutions
              </p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 animate-fade-in-up delay-400">
              <a
                href="#portfolio"
                className="btn btn-primary shadow-lg shadow-blue-500/30 flex items-center gap-2"
              >
                View My Work <FaArrowRight />
              </a>
              <a
                href="#contact"
                className="btn btn-outline flex items-center gap-2"
              >
                Contact Me <FaEnvelope />
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center relative">
            <div className="relative w-80 h-80 lg:w-[400px] lg:h-[400px]">
              <img
                src="/wisnu-profile.jpg"
                alt="Wisnu Bintoro"
                className="absolute inset-0 w-full h-full object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
