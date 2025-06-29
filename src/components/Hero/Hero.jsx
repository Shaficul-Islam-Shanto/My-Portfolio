
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import heroImage from '../../assets/profile.png'

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-20 gap-10">
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="flex-1 text-center md:text-left"
      >
        <h2 className="text-xl text-gray-500 mb-2">Frontend Developer</h2>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Hi, I'm Shaficul Islam Shanto
        </h1>
        <p className="text-gray-600 mb-6">
          I build responsive, user-friendly web applications using React.
        </p>

        {/* Resume Button */}
        <button className="btn rounded bg-primary text-white hover:bg-white hover:text-black hover:border-primary"> Download Resume</button>

        {/* Social Links */}
        <div className="flex gap-4 mt-6 justify-center md:justify-start">
          <a href="https://github.com/Shaficul-Islam-Shanto" target="_blank" rel="noreferrer">
            <FaGithub className="text-2xl hover:text-gray-700" />
          </a>
          <a href="https://www.linkedin.com/in/shaficul-islam-shanto/" target="_blank" rel="noreferrer">
            <FaLinkedin className="text-2xl hover:text-primary-700" />
          </a>
        </div>
      </motion.div>

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex justify-center"
      >
        <img
          src={heroImage} 
          alt="Profile"
          className="w-48 h-48 md:w-75 md:h-75 rounded-full object-contain shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
