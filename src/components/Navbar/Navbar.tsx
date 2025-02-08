import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
      <motion.div className=" w-full top-0 left-0 z-50">
        <div className="flex justify-between pt-5 w-full mb-10">
          <Link
            to={"/"}
            className="font-bold relative bg-[#306998] text-white py-[8px] px-8 shadow-[3px_4px_2px_0px_orange]"
          >
            {"{ DevMeetUp }"}
          </Link>
          <button
            onClick={toggleTheme}
            className={`${
              savedTheme === "light" ? "bi-moon-fill" : "bi-brightness-high"
            } me-14 text-xl`}
          ></button>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
