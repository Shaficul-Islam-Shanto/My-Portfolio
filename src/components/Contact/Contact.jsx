import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="px-6 md:px-20 py-16 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Contact Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Contact Info */}
        <div className="grid gap-8 md:grid-cols-2 text-gray-700">
          <div className="flex items-start gap-4">
            <FaEnvelope className="text-primary text-2xl mt-1" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <a href="mailto:shaficulshanto14@gmail.com" className="text-sm text-primary hover:underline">
                shaficulshanto14@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaPhoneAlt className="text-primary text-xl mt-1" />
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-sm">+8801841-239-275</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaWhatsapp className="text-green-500 text-2xl mt-1" />
            <div>
              <h3 className="font-semibold">WhatsApp</h3>
              <a
                href="https://wa.me/8801841239275"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-primary hover:underline"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
