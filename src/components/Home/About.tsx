import { motion } from "framer-motion";

const About = () => {
  const message =
    "Welcome to the Ethiopian Developer Community! Whether you're a beginner or a seasoned pro, we're here to learn, grow, and support each other in our journey through the world of tech. Let's code, share knowledge, and build something amazing together!";

  const words = message.split(" ");

  return (
    <div className="flex justify-center">
      <div className="w-[90%] text-center mt-20">
        <p className="uppercase mb-5">About Us</p>
        <p className="text-3xl font-medium">
          {words.map((word, index) => (
            <motion.span
              key={index}
              initial={{ x: -30 }}
              whileInView={{ x: 0, color: "#155DFC" }}
              transition={{ type: "spring", delay: index * 0.02 }}
              className="inline-block mr-2"
            >
              {word}
            </motion.span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default About;
