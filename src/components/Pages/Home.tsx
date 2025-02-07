import { motion } from "motion/react";
import Loading from "../Loading/Loading";
import VerticalAccordion from "../Home/Vertical";
// import Navbar from "../Navbar/Navbar";
// import Hero from "../Home/Hero";

const Home = () => {
  return (
    <div>
      {/* Loading */}
      <Loading />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 6, duration: 2 }}
        // className="container mx-auto"
      >
        {/* <Navbar />
        <div className="pb-20">
          <Hero />
        </div> */}

        <VerticalAccordion />
      </motion.div>
    </div>
  );
};

export default Home;
