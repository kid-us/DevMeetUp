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
}

const Panel: React.FC<PanelProps> = ({ open, setOpen, id, icon, title }) => {
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
      <AnimatePresence>
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

              {/*  */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        className={`${
          open === id ? "bg-black/90 text-blue-400" : "bg-white text-black"
        }  transition-colors px-5 border-b-[1px] border-r border-slate-400 flex flex-col-reverse lg:flex-col justify-center items-center gap-4 relative group`}
        onClick={() => setOpen(id)}
      >
        <span className={`${icon} mb-3`}></span>

        {title.split("").map((t) => (
          <span className="leading-1 uppercase font-semibold">{t}</span>
        ))}
      </button>
    </>
  );
};

export default Panel;
