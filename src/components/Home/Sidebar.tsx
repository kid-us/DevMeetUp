import { motion } from "motion/react";
import { useState } from "react";

const Sidebar = () => {
  const files = [
    { id: 1, version: "v1" },
    { id: 2, version: "v2" },
    { id: 3, version: "v3" },
  ];

  const [openedDirectory, setOpenDirectories] = useState<number[]>([1, 2, 3]);

  const handleOpenDirectories = (id: number) => {
    if (openedDirectory.includes(id)) {
      setOpenDirectories(openedDirectory.filter((dir) => dir !== id));
    } else {
      setOpenDirectories((prev) => [...prev, id]);
    }
  };
  return (
    <div className="col-span-3 bg-[#151517] border-r border-zinc-800 grid grid-cols-11">
      {/* Icon */}
      <div className="w-full col-span-3 h-full bg-[#151517] border-r border-zinc-800">
        <p className="text-sm font-bold bg-gradient-to-r from-blue-500 via-green-500 to-white bg-clip-text text-transparent text-center mt-3">
          {"<{"} <span className="bi-cup-hot-fill mx-"></span>
          {"}>"}
        </p>
      </div>
      {/* File */}
      <div className="col-span-8 p-3 w-full">
        <p className="text-xs uppercase">
          <span className="bi-chevron-down"></span> DevMeetUp
        </p>
        {files.map((file) => (
          <div key={file.id} className="ms-4 mt-5 space-y-3">
            <button
              onClick={() => handleOpenDirectories(file.id)}
              className="text-start text-sm block hover:bg-gray-800 w-full rounded py-[1px]"
            >
              <span
                className={`${
                  openedDirectory.includes(file.id)
                    ? "bi-chevron-down"
                    : "bi-chevron-right"
                } text-sm me-2`}
              ></span>
              <span
                className={`${
                  openedDirectory.includes(file.id)
                    ? "bi-folder2-open"
                    : "bi-folder"
                } text-sm me-2`}
              ></span>
              {file.version}
            </button>
            {openedDirectory.includes(file.id) && (
              <div className="ms-5 space-y-2 my-4">
                <motion.button
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.1, 1.2, 1.1, 1] }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.4, 0.6, 0.8],
                  }}
                  className="text-teal-500 block text-sm hover:bg-gray-800 w-full rounded py-[1px] text-start"
                >
                  <span className="text-gray-400 bi-arrow-up-right me-1"></span>{" "}
                  Organizer.meet
                </motion.button>
                <motion.button
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.1, 1.2, 1.1, 1] }}
                  transition={{
                    delay: 0.2,
                    duration: 1,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.4, 0.6, 0.8],
                  }}
                  className="text-teal-500 block text-sm hover:bg-gray-800 w-full rounded py-[1px] text-start"
                >
                  <span className="text-gray-400 bi-arrow-up-right me-1"></span>{" "}
                  Sponsors.meet
                </motion.button>
                <motion.button
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.1, 1.2, 1.1, 1] }}
                  transition={{
                    delay: 0.4,
                    duration: 1,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.4, 0.6, 0.8],
                  }}
                  className="text-teal-500 block text-sm hover:bg-gray-800 w-full rounded py-[1px] text-start"
                >
                  <span className="text-gray-400 bi-arrow-up-right me-1"></span>{" "}
                  Venue.meet
                </motion.button>
                <motion.button
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.1, 1.2, 1.1, 1] }}
                  transition={{
                    delay: 0.6,
                    duration: 1,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.4, 0.6, 0.8],
                  }}
                  className="text-teal-500 block text-sm hover:bg-gray-800 w-full rounded py-[1px] text-start"
                >
                  <span className="text-gray-400 bi-arrow-up-right me-1"></span>{" "}
                  Highlight.meet
                </motion.button>
                <motion.button
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.1, 1.2, 1.1, 1] }}
                  transition={{
                    delay: 0.8,
                    duration: 1,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.4, 0.6, 0.8],
                  }}
                  className="text-teal-500 block text-sm hover:bg-gray-800 w-full rounded py-[1px] text-start"
                >
                  <span className="text-gray-400 bi-arrow-up-right me-1"></span>{" "}
                  Memories.meet
                </motion.button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
