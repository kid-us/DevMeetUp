import { AnimatePresence, motion } from "framer-motion";
import { useWindowSize } from "./useWindowSize";
import Hero from "./Hero";
import Navbar from "../Navbar/Navbar";

interface PanelProps {
  open: number;
  setOpen: (id: number) => void;
  id: number;
  icon: string;
  title: string;
  bg: string;
}

const Panel: React.FC<PanelProps> = ({
  open,
  setOpen,
  id,
  icon,
  title,
  bg,
}) => {
  const { width } = useWindowSize();
  const isOpen = open === id;

  const panelVariants = {
    open: {
      width: "100%",
      height: "100%",
    },
    closed: {
      width: "0%",
      height: "100%",
    },
  };

  const panelVariantsSm = {
    open: {
      width: "100%",
      height: "200px",
    },
    closed: {
      width: "100%",
      height: "0px",
    },
  };

  return (
    <>
      <AnimatePresence key={`panel-${title}`}>
        {isOpen && (
          <motion.div
            key={`panel-${id}`}
            variants={width && width > 1024 ? panelVariants : panelVariantsSm}
            initial="closed"
            animate="open"
            exit="closed"
            className="overflow-y-scroll relative container mx-auto"
          >
            <motion.div initial="closed" animate="open" exit="closed">
              <Navbar />
              <Hero />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        key={`button-${id}`}
        className={`${
          open === id
            ? "bg-black/90 text-white font-semibold"
            : `${bg} text-black`
        } transition-colors px-5 flex flex-col-reverse lg:flex-col justify-center items-center gap-4 relative group shadow border-l border-gray-400`}
        onClick={() => setOpen(id)}
      >
        <img src={icon} className={`mb-3 w-5 h-5`}></img>

        {title.split("").map((t) => (
          <span className="leading-1 uppercase">{t}</span>
        ))}
      </button>
    </>
  );
};

export default Panel;
