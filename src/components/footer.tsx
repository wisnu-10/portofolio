import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black py-8 border-t border-gray-800 text-center">
      <div className="container mx-auto px-6">
        <p className="text-gray-500">
          © {new Date().getFullYear()} Wisnu Bintoro. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="#"
            className="text-gray-500 hover:text-white transition-colors text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-white transition-colors text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-white transition-colors text-2xl"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
