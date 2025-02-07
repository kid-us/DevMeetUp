import {
  motion,
  //   useScroll,
  //   useMotionValueEvent,
  //   AnimatePresence,
} from "motion/react";
// import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  //   const { scrollY } = useScroll();
  //   const [hidden, setHidden] = useState<boolean>(false);

  //   useMotionValueEvent(scrollY, "change", (latest) => {
  //     const previous = scrollY.getPrevious();
  //     if (previous && latest > previous && latest > 80) {
  //       setHidden(true);
  //     } else {
  //       setHidden(false);
  //     }
  //   });

  return (
    <>
      {/* <AnimatePresence> */}
      {/* {!hidden && ( */}
      <motion.div
        // exit={{ opacity: 0 }}
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // transition={{
        //   duration: 1,
        // }}

        className=" w-full top-0 left-0 z-50"
      >
        <div className="container mx-auto mb-6">
          <div className="flex justify-between pt-5 w-full">
            <Link
              to={"/"}
              className="font-bold relative bg-black text-white py-[5px] px-8 shadow-[3px_4px_2px_0px_green]"
            >
              {"{dev}"}
            </Link>
          </div>
        </div>
      </motion.div>
      {/* )} */}
      {/* </AnimatePresence> */}
    </>
  );
};

export default Navbar;
