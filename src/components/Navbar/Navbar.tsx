import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "motion/react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous && latest > previous && latest > 80) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <AnimatePresence>
        {!hidden && (
          <motion.div
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
            }}
            className="fixed w-full top-0 left-0 z-50"
          >
            <div className="container mx-auto">
              <div className="flex justify-between py-8 w-full">
                <Link
                  to={"/"}
                  className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-green-500 to-white bg-clip-text text-transparent"
                >
                  {"<{"} <span className="bi-cup-hot-fill mx-1"></span>
                  {"}>"} DevMeetUp
                </Link>

                <div className="flex gap-x-10">
                  <Link
                    to={"/v1"}
                    className="font-bold text-zinc-400 hover:text-white transition-colors"
                  >
                    v1
                  </Link>
                  <Link
                    to={"/v1"}
                    className="font-bold text-zinc-400 hover:text-white transition-colors"
                  >
                    v2
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
