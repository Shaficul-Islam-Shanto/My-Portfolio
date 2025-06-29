import { motion } from "framer-motion";
import profileIllustration from "../../assets/Profile-Illustration.png"

const About = () => {
  return (
    <section id="about" className="px-6 md:px-20 py-16 ">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        {/* Heading with Divider */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Text Section */}
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              I'm <strong>Shaficul Islam Shanto</strong>, a passionate Frontend Developer with a
              background in Mathematics. I started my programming journey in college,
              exploring how websites work and fell in love with React. I enjoy building clean,
              interactive UIs and solving real-world problems with code.
            </p>

            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              I love working on modern web technologies and constantly learning new tools.
              Outside of programming, I’m involved in the development sector as a volunteer,
              and I also enjoy working with youth communities and the Bangladesh Scouts.
            </p>

            <p className="text-gray-700 leading-relaxed text-lg">
              My hobbies include exploring nature, learning about design, and brainstorming
              ideas that combine tech and social impact.
            </p>
          </div>

          {/* Illustration Section */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={profileIllustration}
              alt="About Illustration"
              className="w-[300px] md:w-[400px] object-contain"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
