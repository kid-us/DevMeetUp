import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

interface Version {
  id: number;
  icon: string;
  version: string;
  delay: number;
}

const Loading = () => {
  const versions: Version[] = [
    { id: 1, icon: "bi-check", version: "V1", delay: 0.2 },
    { id: 2, icon: "bi-check", version: "V2", delay: 0.2 },
    { id: 2, icon: "bi-check", version: "V3", delay: 0.2 },
  ];

  const [show, setShow] = useState(true);

  // Hide the loading
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(false);
    }, 6000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <div className="bg-primary fixed top-0 left-0 right-0 bottom-0">
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: [0.8, 0.5, 0.3, 0] }}
            transition={{
              delay: 1,
              duration: 3,
            }}
            className="flex lg:justify-center items-center lg:gap-x-10 md:gap-x-8 gap-x-8 h-screen mx-3"
          >
            <motion.p
              layout
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 15 }}
              transition={{
                delay: 0.3,
                duration: 1,
              }}
              className="flex justify-center items-center lg:text-xl text-lg font-bold"
            >
              {"<"}DevMeetUp <span className="bi-cup-hot-fill ms-2"></span>{" "}
              {"/>"}
            </motion.p>

            {versions.map((v) => (
              <motion.p
                key={v.id}
                layout
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 15 }}
                transition={{
                  delay: v.delay,
                  duration: 1,
                }}
                className={`relative lg:text-xl text-green-700 font-semibold`}
              >
                <motion.span
                  initial={{ opacity: 0, x: -5 }}
                  animate={{
                    opacity: 1,
                    x: 5,
                  }}
                  transition={{
                    delay: 0.3,
                    duration: 1,
                  }}
                  className={`absolute -top-2 -right-4 ${v.icon} ${
                    v.version === "v3" ? "text-lg text-yellow-600" : ""
                  } `}
                />
                {v.version}
              </motion.p>
            ))}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Loading;
