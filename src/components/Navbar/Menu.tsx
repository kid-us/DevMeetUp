import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  menuAnimation: string;
  onClose: () => void;
}

const Menu = ({ onClose, menuAnimation }: Props) => {
  const [savedTheme, setSavedTheme] = useState<string>("");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) {
      document.body.classList.add(storedTheme);
      setSavedTheme(storedTheme);
    } else {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
        setSavedTheme("dark");
      } else {
        document.body.classList.add("light");
        localStorage.setItem("theme", "light");
        setSavedTheme("light");
      }
    }
  }, []); // Run once on mount

  const toggleTheme = () => {
    const currentTheme = localStorage.getItem("theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    // Update state and document body classes
    document.body.classList.remove("dark", "light");
    document.body.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
    setSavedTheme(newTheme);
  };
  return (
    <>
      {/* Overlay */}
      <div className="bg-neutral-700/50 fixed z-10 top-0 left-0 w-full h-[100dvh]"></div>
      <div
        className={`fixed z-50 top-0 left-0 w-[95%] bg-background h-screen bg-secondary animate__animated ${menuAnimation}`}
      >
        <div className="py-7 px-5">
          <div className="flex justify-between text-xl mb-10">
            <Link to={"/"} className="font-semibold relative py-[8px] text-xl">
              {"{DevMeetUp}"}
            </Link>

            <div className="flex gap-x-6">
              <button
                onClick={toggleTheme}
                className={`${
                  savedTheme === "light" ? "bi-moon-fill" : "bi-brightness-high"
                } lg:me-14 text-xl`}
              ></button>

              <button
                onClick={onClose}
                className="bi-chevron-left text-2xl"
              ></button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-20">
            <motion.a
              href="/"
              //   initial={{ opacity: 0 }}
              //   animate={{ opacity: 1 }}
              //   transition={{ delay: 0.3, duration: 0.5 }}
              className="rounded-xl border border-gray-500 p-9 bg-[#61DAFB]"
            >
              Version 1
            </motion.a>
            <motion.a
              href="/"
              //   initial={{ opacity: 0 }}
              //   animate={{ opacity: 1 }}
              //   transition={{ delay: 0.3, duration: 0.5 }}
              className="rounded-xl border border-gray-500 p-9 bg-[#8CC84B]"
            >
              Version 2
            </motion.a>
            <motion.a
              href="/"
              //   initial={{ opacity: 0 }}
              //   animate={{ opacity: 1 }}
              //   transition={{ delay: 0.3, duration: 0.5 }}
              className="rounded-xl border border-gray-500 p-9 bg-[#61DAFB]"
            >
              Version 3
            </motion.a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
