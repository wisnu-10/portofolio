import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-surface">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="lg:w-1/2 space-y-8 lg:space-y-12">
            <h2 className="text-3xl lg:text-5xl font-bold animate-fade-in-up">
              Let's Work <span className="text-blue-500">Together</span>
            </h2>
            <p className="text-gray-400 text-lg lg:text-xl leading-relaxed animate-fade-in-up delay-100">
              Have a project in mind or want to discuss a potential
              collaboration? I'd love to hear from you.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-500">
                  <FaEnvelope className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Email</h3>
                  <a
                    href="mailto:wisnubintoro1997@gmail.com"
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    wisnubintoro1997@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-500">
                  <FaMapMarkerAlt className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Location</h3>
                  <p className="text-gray-400">Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <form className="space-y-6 bg-black p-8 rounded-xl border border-gray-800">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-surface border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Fullname"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-surface border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="example@email.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full bg-surface border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Consultation Project"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">
                  Message
                </label>
                <textarea
                  className="w-full bg-surface border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors h-32 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="button"
                className="w-full btn btn-primary flex items-center justify-center gap-2"
              >
                Send Message <FaPaperPlane className="text-sm" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
