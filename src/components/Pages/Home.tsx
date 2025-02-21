import { motion } from "motion/react";
import Loading from "../Loading/Loading";
import LargeDevice from "../Home/LargeDevice";
import SmallDevice from "../Home/SmallDevice";

const Home = () => {
  return (
    <div>
      {/* Loading */}
      <Loading />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 2 }}
      >
        {/* Large Device Home Page */}
        <LargeDevice />

        {/* Small Device Home Page */}
        <SmallDevice />
      </motion.div>
    </div>
  );
};

export default Home;
