import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

const Navbar = () => {
  const [savedTheme, setSavedTheme] = useState<string>("");
  const [viewMenu, setViewMenu] = useState<boolean>(false);

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

  const [animationClass, setAnimationClass] = useState<string>(
    "animate__fadeInLeft"
  );

  const handleCloseMenu = () => {
    setAnimationClass("animate__fadeOutLeft");
    setTimeout(() => {
      setViewMenu(false);
      setAnimationClass("animate__fadeInLeft");
    }, 500);
  };

  return (
    <>
      <motion.div className=" w-full top-0 left-0 z-50">
        <div className="flex justify-between pt-5 w-full mb-10">
          <Link to={"/"} className="font-semibold relative py-[8px] text-xl">
            {"{DevMeetUp}"}
          </Link>
          <div className="flex gap-x-5">
            <button
              onClick={toggleTheme}
              className={`${
                savedTheme === "light" ? "bi-moon-fill" : "bi-brightness-high"
              } lg:me-14 text-xl`}
            ></button>

            <button
              onClick={() => {
                toggleTheme;
                setViewMenu(true);
              }}
              className={`lg:hidden block bi-list lg:me-14 text-2xl`}
            ></button>
          </div>
        </div>
      </motion.div>

      {/* Menu */}
      {viewMenu && (
        <Menu
          onClose={() => handleCloseMenu()}
          menuAnimation={animationClass}
        />
      )}
    </>
  );
};

export default Navbar;
