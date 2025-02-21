import { motion } from "framer-motion";
import { calendar, developers, events } from "../../assets";
import AnimatedNumbers from "./AnimatedNumbers";

const About = () => {
  const message =
    "Welcome to the Ethiopian Developer Community! Whether you're a beginner or a seasoned pro, we're here to learn, grow, and support each other in our journey through the world of tech. Let's code, share knowledge, and build something amazing together!";

  const words = message.split(" ");

  const stats = [
    { icon: developers, title: "Community Members", target: 5000 },
    { icon: events, title: "Events Organized", target: 100 },
    { icon: events, title: "Tech Partners", target: 50 },
    { icon: calendar, title: "Years of Impact", target: 3 },
  ];

  return (
    <>
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex justify-center"
      >
        <div className="w-[90%] text-center mt-14">
          <p className="uppercase mb-5 text-color font-medium">
            <span className="bi-stars me-2"></span> About Us
          </p>
          <p className="text-3xl font-medium">
            {words.map((word, index) => (
              <motion.span
                key={index}
                initial={{ x: -5, color: "#71717a" }}
                whileInView={{ x: 0, color: "" }}
                transition={{ delay: index * 0.03 }}
                className="inline-block mr-2"
              >
                {word}
              </motion.span>
            ))}
          </p>
        </div>
      </motion.div>
      {/* Stats */}
      <div className="flex lg:justify-center lg:items-center mt-14 gap-x-20">
        {stats.map((stat, index) => (
          <div
            className={`text-center ${index % 2 === 0 ? "" : "lg:mt-24 mt-10"}`}
            key={index}
          >
            <div className="flex justify-center mb-3">
              <img src={stat.icon} alt={stat.title} className="w-12" />
            </div>
            <AnimatedNumbers target={stat.target} />
            <p className="font-medium uppercase text-zinc-500 mt-2">
              {stat.title}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default About;
