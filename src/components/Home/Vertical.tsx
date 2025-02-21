import Panel from "./Panel";
import Navbar from "../Navbar/Navbar";
import Hero from "./Hero";
import About from "./About";
import usePanelStore from "../../store/store";

interface Item {
  id: number;
  title: string;
  bg: string;
}

const items: Item[] = [
  {
    id: 1,
    title: "Version 3",
    bg: "bg-background",
  },
  {
    id: 2,
    title: "Version 2",
    bg: "bg-background",
  },
  {
    id: 3,
    title: "Version 1",
    bg: "bg-background",
  },
];

const VerticalAccordion = () => {
  const { openTab } = usePanelStore();

  return (
    <div className="flex flex-col lg:flex-row h-[100dvh] w-full mx-auto overflow-auto">
      {openTab === 0 && (
        <div className="container mx-auto">
          <Navbar />
          <Hero />
          <About />
        </div>
      )}
      {items.map((item) => (
        <Panel key={item.id} id={item.id} title={item.title} bg={item.bg} />
      ))}
    </div>
  );
};

export default VerticalAccordion;
