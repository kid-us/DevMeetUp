import { motion } from "motion/react";
import Loading from "../Loading/Loading";
import VerticalAccordion from "../Home/Vertical";
import Hero from "../Home/Hero";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div>
      {/* Loading */}
      <Loading />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5, duration: 2 }}
      >
        <div className="lg:block hidden">
          <VerticalAccordion />
        </div>

        <div className="container mx-auto lg:hidden block">
          <Navbar />
          <Hero />
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
