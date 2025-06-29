import { motion } from "framer-motion";

const educationList = [
  {
    degree: "MSc in Mathematics",
    institution: "Dhaka College",
    year: "Ongoing",
  },
  {
    degree: "BSc in Mathematics",
    institution: "Dhaka College",
    year: "2023",
  },
];

const Education = () => {
  return (
    <section id="education" className="px-6 md:px-20 py-16 ">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Education</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-blue-600 pl-6 space-y-10">
          {educationList.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -left-5 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-md"></div>
              <h3 className="text-xl font-semibold ml-5 text-gray-800">{edu.degree}</h3>
              <p className="text-gray-600 ml-5">{edu.institution}</p>
              <span className="text-sm text-gray-500 ml-5">{edu.year}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
