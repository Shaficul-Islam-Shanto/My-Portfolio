import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import prodQuest from "../../assets/ProdQuest.png"
import plantsCare from "../../assets/PlantsCare.png"
import billsPay from "../../assets/BillsPay.png"

const projects = [
  {
    id: "1",
    name: "ProdQuest",
    image: prodQuest,
    tech: "React, Express, MongoDB",
  },
  {
    id: "2",
    name: "Plant Care App",
    image: plantsCare,
    tech: "React, Firebase, Node",
  },
  {
    id: "3",
    name: "Bills Pay Site",
    image: billsPay,
    tech: "React, Node, Tailwind",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="px-6 md:px-20 py-16 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Project Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800">{project.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{project.tech}</p>
                <Link
                  to={`/projects/${project.id}`}
                  className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 transition"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
