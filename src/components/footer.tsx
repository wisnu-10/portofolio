import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black py-8 border-t border-gray-800 text-center">
      <div className="container mx-auto px-6">
        <p className="text-gray-500">
          © {new Date().getFullYear()} Wisnu Bintoro. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://github.com/wisnu-10"
            className="text-gray-500 hover:text-white transition-colors text-2xl"
            target="blank"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/wisnu-bintoro-aaa23412b/"
            className="text-gray-500 hover:text-white transition-colors text-2xl"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
