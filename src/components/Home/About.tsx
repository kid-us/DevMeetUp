import { motion } from "framer-motion";
import { calendar, developers, events } from "../../assets";
import AnimatedNumbers from "./AnimatedNumbers";

const About = () => {
  const message =
    "Welcome to the Ethiopian Developer Community! Whether you're a beginner or a seasoned pro, we're here to learn, grow, and support each other in our journey through the world of tech. Let's code, share knowledge, and build something amazing together!";

  const words = message.split(" ");

  // Stats
  const stats = [
    { id: 1, icon: developers, title: "Community Members", target: 5000 },
    { id: 2, icon: events, title: "Events Organized", target: 100 },
    { id: 3, icon: events, title: "Tech Partners", target: 50 },
    { id: 4, icon: calendar, title: "Years of Impact", target: 3 },
  ];

  // Mission and Vision
  const missionVision = [
    {
      icon: "bi-bullseye",
      title: "Mission",
      content:
        "DevMeetup is dedicated to fostering a vibrant tech community in Ethiopia. We bring together developers, designers, and tech enthusiasts to share knowledge, collaborate, and grow together.",
    },
    {
      icon: "bi-binoculars-fill",
      title: "Vision",
      content:
        "To become the premier tech community platform in Africa, empowering the next generation of tech leaders and innovators through meaningful connections and knowledge sharing.",
    },
  ];

  // What we Do
  const whatWeDo = [
    {
      id: 1,
      title: "Tech Events",
      icon: "bi-calendar3-week-fill",
      content:
        "Regular meetups, workshops, and conferences focused on latest technologies and industry trends.",
    },
    {
      id: 2,
      icon: "bi-people-fill",
      title: "Community Building",
      content:
        "Creating spaces for developers to network, collaborate, and share experiences.",
    },
    {
      id: 3,
      icon: "bi-person-fill-gear",
      title: "Skills Development",
      content:
        "Hands-on workshops and training sessions to enhance technical and soft skills.",
    },
    {
      id: 4,
      icon: "bi-wifi",
      title: "Industry Connections",
      content:
        "Bridging the gap between talent and opportunities in the tech industry.",
    },
  ];

  return (
    <>
      {/* About Us */}
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex justify-center"
      >
        <div className="lg:w-[90%] text-center lg:mt-14 mt-8">
          <p className="uppercase mb-10 text-color font-medium">
            <span className="bi-stars me-2"></span> About Us
          </p>
          <p className="lg:text-3xl text-2xl font-medium">
            {words.map((word, index) => (
              <motion.span
                key={index}
                initial={{ color: "#71717a" }}
                whileInView={{ color: "" }}
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
      <div className="lg:flex lg:justify-center lg:items-center grid grid-cols-2 mt-14 lg:gap-x-20">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className={`text-center ${index % 2 === 0 ? "" : "lg:mt-24 mt-20"}`}
          >
            <div className="flex justify-center mb-3">
              <img src={stat.icon} alt={stat.title} className="w-12" />
            </div>
            <AnimatedNumbers target={stat.target} />
            <p className="font-medium uppercase text-zinc-500 mt-2">
              {stat.title}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Vision and Mission */}
      <p className="uppercase text-color font-medium text-center lg:mt-40 mt-32 mb-10">
        <span className="bi-stars me-2"></span> Our Mission & Vision
      </p>
      <div className="flex justify-center ">
        <div className="grid lg:grid-cols-2 lg:gap-10 gap-8">
          {missionVision.map((mv) => (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-secondary border border-secondary-border rounded p-5"
            >
              <div className="flex space-x-2 mb-5 font-semibold text-xl">
                <i className={`${mv.icon} text-color`}></i>
                <p className="font-approach">{mv.title}</p>
              </div>
              <p className="text-text-secondary">{mv.content}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* What we Do */}
      <p className="uppercase text-color font-medium text-center lg:mt-20 mt-16 mb-10">
        <span className="bi-stars me-2"></span> What we do
      </p>
      <div className="grid lg:grid-cols-4 gap-5">
        {whatWeDo.map((w) => (
          <motion.div
            key={w.id}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="relative bg-secondary border border-secondary-border rounded-r-full p-5">
              <p className="absolute -top-3 text-sm bg-white rounded-full font-bold flex justify-center items-center w-5 h-5 text-black text-center">
                {w.id}
              </p>
              <p className={`text-2xl text-color ${w.icon}`}></p>
              <p className="font-semibold uppercase">{w.title}</p>
            </div>
            <p className="text-text-secondary text-sm mt-2 bg-secondary border border-secondary-border rounded-l-3xl p-5">
              {w.content}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
