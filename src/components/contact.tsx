import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-surface relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Header */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-6xl font-bold animate-fade-in-up">
              Let's Work <span className="text-blue-500 font-extrabold">Together</span>
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
            <p className="text-gray-400 text-lg lg:text-xl leading-relaxed animate-fade-in-up delay-100 max-w-2xl mx-auto">
              I'm currently available for new opportunities and collaborations. 
              If you're looking for a dedicated <span className="text-white font-medium">Fullstack Developer</span>, 
              feel free to reach out!
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in-up delay-200">
            {/* Email Card */}
            <div className="group bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:border-blue-500/50 hover:bg-white/10 transition-all duration-500">
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 mx-auto mb-6 group-hover:scale-110 transition-transform">
                <FaEnvelope className="w-8 h-8" />
              </div>
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-2">
                Email Address
              </h3>
              <a
                href="mailto:wisnubintoro1997@gmail.com"
                className="text-xl lg:text-2xl font-bold text-white hover:text-blue-400 transition-colors break-all"
              >
                wisnubintoro1997@gmail.com
              </a>
            </div>

            {/* Location Card */}
            <div className="group bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:border-blue-500/50 hover:bg-white/10 transition-all duration-500">
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 mx-auto mb-6 group-hover:scale-110 transition-transform">
                <FaMapMarkerAlt className="w-8 h-8" />
              </div>
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-2">
                Current Location
              </h3>
              <p className="text-xl lg:text-2xl font-bold text-white">
                Indonesia
              </p>
            </div>
          </div>

          {/* CTA Footer */}
          <div className="pt-8 animate-fade-in-up delay-300">
            <p className="text-gray-500 italic">
              "Based in Indonesia, working with clients worldwide."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
