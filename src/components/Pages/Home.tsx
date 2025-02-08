import { motion } from "motion/react";
import Loading from "../Loading/Loading";
import VerticalAccordion from "../Home/Vertical";

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
        <VerticalAccordion />
      </motion.div>
    </div>
  );
};

export default Home;
