import { AnimatePresence, motion } from "framer-motion";
import { useWindowSize } from "./useWindowSize";
import Navbar from "../Navbar/Navbar";
import Version1 from "../Pages/V1";
import Version2 from "../Pages/V2";
import Version3 from "../Pages/V3";
import usePanelStore from "../../store/store";

interface PanelProps {
  id: number;
  title: string;
  bg: string;
}

const Panel: React.FC<PanelProps> = ({ id, title }) => {
  const { openTab, setOpenTab } = usePanelStore();

  const { width } = useWindowSize();
  const isOpen = openTab === id;

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
              {id === 1 && <Version1 />}
              {id === 2 && <Version2 />}
              {id === 3 && <Version3 />}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        key={`button-${id}`}
        className={`${
          openTab === id
            ? "bg-panel-bg font-semibold text-btn-color"
            : `card-bg`
        } sticky top-0 transition-colors px-5 flex flex-col-reverse lg:flex-col justify-center items-center gap-4 group shadow border-l border-panel-border`}
        onClick={() => setOpenTab(id)}
      >
        {title.split("").map((t) => (
          <span className="leading-1 uppercase">{t}</span>
        ))}
      </button>
    </>
  );
};

export default Panel;
