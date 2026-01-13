import { FaClock, FaComments, FaBullseye } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-surface">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto space-y-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-12 animate-fade-in-up">
            About <span className="text-blue-500">Me</span>
          </h2>

          <div className="space-y-6 text-gray-400 leading-relaxed text-lg text-justify">
            <p className="text-center">
              I am a professional web developer with a strong foundation in
              problem-solving and a passion for technology. I have transitioned
              into Web Development to build scalable and efficient digital
              solutions.
            </p>

            <div className="pt-8">
              <p className="text-center mb-8 font-semibold text-xl text-white">
                My Core Values
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-black p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition-colors text-center group">
                  <div className="w-12 h-12 mx-auto bg-blue-500/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                    <FaClock className="text-2xl text-blue-500" />
                  </div>
                  <h3 className="text-white font-bold mb-2">Timeliness</h3>
                  <p className="text-sm text-gray-400">
                    I respect deadlines and prioritize efficient workflow
                    management to ensure projects are delivered on schedule.
                  </p>
                </div>

                <div className="bg-black p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition-colors text-center group">
                  <div className="w-12 h-12 mx-auto bg-blue-500/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                    <FaComments className="text-2xl text-blue-500" />
                  </div>
                  <h3 className="text-white font-bold mb-2">
                    Clear Communication
                  </h3>
                  <p className="text-sm text-gray-400">
                    I bridge the gap between technical complexity and
                    stakeholder needs through transparent and proactive updates.
                  </p>
                </div>

                <div className="bg-black p-6 rounded-xl border border-gray-800 hover:border-blue-500 transition-colors text-center group">
                  <div className="w-12 h-12 mx-auto bg-blue-500/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                    <FaBullseye className="text-2xl text-blue-500" />
                  </div>
                  <h3 className="text-white font-bold mb-2">Precision</h3>
                  <p className="text-sm text-gray-400">
                    I believe that quality lies in the details. I write clean,
                    maintainable code and rigorously test for stability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
