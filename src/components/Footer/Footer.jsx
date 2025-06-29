import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-600">
        {/* Name or Logo */}
        <div className="text-center md:text-left font-semibold text-gray-800 text-lg">
          © {new Date().getFullYear()} Shaficul Islam Shanto
        </div>

        {/* Social Links */}
        <div className="flex gap-4 text-xl">
          <a
            href="https://github.com/Shaficul-Islam-Shanto"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/shaficul-islam-shanto/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
