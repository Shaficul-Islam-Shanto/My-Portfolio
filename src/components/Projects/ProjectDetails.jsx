import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import prodQuest from "../../assets/ProdQuest.png"
import plantsCare from "../../assets/PlantsCare.png"
import billsPay from "../../assets/BillsPay.png"
const projectData = [
  {
    id: "1",
    name: "ProdQuest",
    image: prodQuest,
    tech: "React, Tailwind CSS, MongoDB, Express",
    live: "https://a11-b11-sis.netlify.app/",
    github: "https://github.com/Shaficul-Islam-Shanto/ProdQuest",
    description: "A product boycott and recommendation platform to raise consumer awareness.",
    challenges: "Integrating MongoDB relationships and building recommendation logic.",
    improvements: "Adding admin dashboard, filtering system, and auth with JWT.",
  },
  {
    id: "2",
    name: "Plant Care App",
    image: plantsCare,
    tech: "React, Firebase, Date-fns",
    live: "https://ph-b11-a10-sis.netlify.app/",
    github: "https://github.com/Shaficul-Islam-Shanto/PlantsCare",
    description: "Track and manage watering schedules for houseplants with personalized care info.",
    challenges: "Calculating next watering dates and user data separation.",
    improvements: "Push notifications, image upload, and AI-based suggestions.",
  },
  {
    id: "3",
    name: "Bills Pay Site",
    image: billsPay,
    tech: "React, Node.js, MongoDB, Stripe",
    live: "https://ph-b11-a9-sis.netlify.app/",
    github: "https://github.com/Shaficul-Islam-Shanto/BillPayWeb",
    description: "An online T-shirt e-commerce store with payment integration and cart management.",
    challenges: "Stripe integration and cart synchronization.",
    improvements: "Add user reviews, admin panel, and responsive dashboard.",
  },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const found = projectData.find((p) => p.id === id);
    setProject(found);
  }, [id]);

  if (!project) {
    return <p className="text-center py-20 text-gray-500">Project not found.</p>;
  }

  return (
    <section className="px-6 md:px-20 py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Go Back */}
        <Link
          to="/#projects"
          className="inline-block mb-6 text-primary hover:underline"
        >
          ← Back to Projects
        </Link>

        {/* Project Header */}
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <img
            src={project.image}
            alt={project.name}
            className="w-full md:w-1/2 rounded shadow-md"
          />

          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{project.name}</h2>
            <p className="text-gray-600 mb-2">
              <strong>Tech Stack:</strong> {project.tech}
            </p>

            <div className="flex gap-4 mb-4">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Live Site
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="mt-10 space-y-6 text-gray-700">
          <div>
            <h3 className="text-xl font-semibold mb-1">Description</h3>
            <p>{project.description}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-1">Challenges</h3>
            <p>{project.challenges}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-1">Future Improvements</h3>
            <p>{project.improvements}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
