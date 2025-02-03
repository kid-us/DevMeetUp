import { motion } from "motion/react";
import Loading from "../Loading/Loading";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div>
      {/* Loading */}
      <Loading />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 6, duration: 2 }}
        className="container mx-auto"
      >
        <Navbar />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error odio
          est magnam optio quidem vel modi magni tenetur perferendis tempore
          iure eaque quos doloremque, esse quibusdam, sequi delectus corrupti
          repellendus?
        </p>
      </motion.div>
    </div>
  );
};

export default Home;
