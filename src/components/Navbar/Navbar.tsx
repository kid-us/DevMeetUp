import { motion } from "motion/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <motion.div className=" w-full top-0 left-0 z-50">
        <div className="flex justify-between pt-5 w-full mb-10">
          <Link
            to={"/"}
            className="font-bold relative bg-[#8CC84B] text-white py-[5px] px-8 shadow-[3px_4px_2px_0px_orange]"
          >
            {"{dev}"}
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
