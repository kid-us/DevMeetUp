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

const Panel: React.FC<PanelProps> = ({ id, title, bg }) => {
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
              {/* {id === 0 && (
                <>
                  <Hero />
                  <About />
                </>
              )} */}
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
            ? "bg-black/90 text-white font-semibold"
            : `${bg} text-black`
        } sticky top-0 transition-colors px-5 flex flex-col-reverse lg:flex-col justify-center items-center gap-4 group shadow border-l border-panel-border text-panel-text`}
        onClick={() => setOpenTab(id)}
      >
        {/* <img src={icon} className={`mb-3 w-5 h-5`}></img> */}

        {title.split("").map((t) => (
          <span className="leading-1 uppercase">{t}</span>
        ))}
      </button>
    </>
  );
};

export default Panel;
